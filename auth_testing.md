# AILIMITS Auth Testing

## Admin credentials
- Email: `admin@ailimits.ai`
- Password: `AiLimits2026!`

## Token model
- JWT (HS256), 12h expiry. Returned in login response body as `access_token`.
- Frontend stores token in `localStorage` key `ailimits_admin_token` and sends `Authorization: Bearer <token>`.

## Endpoints
- POST `/api/auth/login` `{email,password}` -> `{access_token, user}`
- GET `/api/auth/me` (Bearer) -> `{email,name,role}`
- GET `/api/admin/waitlist` (Bearer) -> `{count, entries[]}` ; 401 without token
- POST `/api/waitlist` `{email, company?, use_case?}` -> `{status, duplicate, message}`

## Brute force
- 5 failed logins per ip:email -> 15 min lockout (429).
