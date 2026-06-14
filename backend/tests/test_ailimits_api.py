"""Backend regression tests for AILIMITS API.

Covers:
- POST /api/waitlist (validate, persist, dedupe)
- POST /api/auth/login (success + invalid credentials)
- GET /api/admin/waitlist (401 without token, 200 with token)
- GET /api/auth/me (auth)
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://trust-check-37.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

ADMIN_EMAIL = "admin@ailimits.ai"
ADMIN_PASSWORD = "AiLimits2026!"


@pytest.fixture(scope="session")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="session")
def admin_token(session):
    r = session.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD})
    if r.status_code == 429:
        pytest.skip("Login locked out, skipping authed tests")
    assert r.status_code == 200, f"Login failed: {r.status_code} {r.text}"
    data = r.json()
    assert "access_token" in data and len(data["access_token"]) > 0
    assert data["user"]["email"] == ADMIN_EMAIL
    return data["access_token"]


# ---------- Waitlist ----------
class TestWaitlist:
    def test_valid_email_signup(self, session):
        email = f"test_{uuid.uuid4().hex[:8]}@example.com"
        r = session.post(f"{API}/waitlist", json={"email": email, "company": "TestCo", "use_case": "qa"})
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["status"] == "ok"
        assert body["duplicate"] is False

    def test_invalid_email_rejected(self, session):
        r = session.post(f"{API}/waitlist", json={"email": "not-an-email"})
        assert r.status_code == 422

    def test_duplicate_email_idempotent(self, session):
        email = f"dup_{uuid.uuid4().hex[:8]}@example.com"
        r1 = session.post(f"{API}/waitlist", json={"email": email})
        assert r1.status_code == 200
        assert r1.json()["duplicate"] is False

        r2 = session.post(f"{API}/waitlist", json={"email": email})
        assert r2.status_code == 200
        assert r2.json()["duplicate"] is True

    def test_email_lowercased(self, session, admin_token):
        email_upper = f"UPPER_{uuid.uuid4().hex[:8]}@Example.COM"
        r = session.post(f"{API}/waitlist", json={"email": email_upper})
        assert r.status_code == 200

        # Confirm storage is lowercased via admin endpoint
        r2 = session.get(f"{API}/admin/waitlist", headers={"Authorization": f"Bearer {admin_token}"})
        assert r2.status_code == 200
        emails = [e["email"] for e in r2.json()["entries"]]
        assert email_upper.lower() in emails


# ---------- Auth ----------
class TestAuth:
    def test_login_success(self, session):
        r = session.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD})
        assert r.status_code == 200, r.text
        data = r.json()
        assert "access_token" in data
        assert data["user"]["email"] == ADMIN_EMAIL
        assert data["user"]["role"] == "admin"

    def test_login_invalid_password(self, session):
        r = session.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": "wrong-password-zzz"})
        assert r.status_code in (401, 429)

    def test_me_requires_auth(self, session):
        r = session.get(f"{API}/auth/me")
        assert r.status_code == 401

    def test_me_with_token(self, session, admin_token):
        r = session.get(f"{API}/auth/me", headers={"Authorization": f"Bearer {admin_token}"})
        assert r.status_code == 200
        assert r.json()["email"] == ADMIN_EMAIL


# ---------- Admin ----------
class TestAdminWaitlist:
    def test_unauth_401(self, session):
        r = session.get(f"{API}/admin/waitlist")
        assert r.status_code == 401

    def test_auth_returns_entries(self, session, admin_token):
        r = session.get(f"{API}/admin/waitlist", headers={"Authorization": f"Bearer {admin_token}"})
        assert r.status_code == 200
        data = r.json()
        assert "count" in data and "entries" in data
        assert isinstance(data["entries"], list)
        assert data["count"] == len(data["entries"])
        if data["entries"]:
            row = data["entries"][0]
            assert "email" in row and "id" in row and "created_at" in row
            # MongoDB ObjectId should be serialized as str
            assert isinstance(row["id"], str)
