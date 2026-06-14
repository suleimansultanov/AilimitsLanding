import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LogOut, RefreshCw, Download, Inbox } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Admin() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user === false) navigate("/login", { replace: true });
  }, [user, navigate]);

  const load = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/admin/waitlist`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEntries(data.entries);
      setCount(data.count);
    } catch (e) {
      if (e.response?.status === 401) {
        logout();
        navigate("/login", { replace: true });
      }
    } finally {
      setLoading(false);
    }
  }, [token, logout, navigate]);

  useEffect(() => {
    load();
  }, [load]);

  const exportCsv = () => {
    const rows = [["email", "company", "use_case", "created_at"]];
    entries.forEach((e) => rows.push([e.email, e.company || "", e.use_case || "", e.created_at]));
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ailimits-waitlist.csv";
    a.click();
  };

  if (!user || !user.email) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black font-mono text-sm text-zinc-500">
        Authenticating…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center border border-violet-500/60 bg-violet-600/10">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-violet-400">
                <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
              </svg>
            </span>
            <span className="font-heading text-base font-bold tracking-tight">
              AI<span className="text-violet-400">LIMITS</span>
              <span className="ml-2 font-mono text-xs font-normal text-zinc-500">/ admin</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-xs text-zinc-500 sm:inline">{user.email}</span>
            <button
              data-testid="admin-logout"
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="flex items-center gap-2 border border-white/10 px-3 py-2 font-mono text-xs uppercase tracking-wider text-zinc-300 transition-colors hover:bg-zinc-900"
            >
              <LogOut className="h-3.5 w-3.5" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400">Early access</p>
            <h1 className="mt-2 font-heading text-3xl font-semibold">Waitlist</h1>
            <p className="mt-2 font-mono text-sm text-zinc-500" data-testid="admin-count">
              {count} {count === 1 ? "signup" : "signups"}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              data-testid="admin-refresh"
              onClick={load}
              className="flex items-center gap-2 border border-white/10 px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-zinc-300 transition-colors hover:bg-zinc-900"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} /> Refresh
            </button>
            <button
              data-testid="admin-export"
              onClick={exportCsv}
              disabled={!entries.length}
              className="flex items-center gap-2 bg-violet-600 px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-white transition-colors hover:bg-violet-500 disabled:opacity-50"
            >
              <Download className="h-3.5 w-3.5" /> Export CSV
            </button>
          </div>
        </div>

        <div className="mt-8 border border-white/10">
          <div className="hidden grid-cols-12 gap-4 border-b border-white/10 bg-zinc-900/50 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 md:grid">
            <div className="col-span-4">Email</div>
            <div className="col-span-3">Company</div>
            <div className="col-span-3">Use case</div>
            <div className="col-span-2">Date</div>
          </div>

          {loading ? (
            <div className="px-5 py-16 text-center font-mono text-sm text-zinc-500">Loading…</div>
          ) : entries.length === 0 ? (
            <div className="flex flex-col items-center px-5 py-20 text-center" data-testid="admin-empty">
              <Inbox className="h-8 w-8 text-zinc-700" />
              <p className="mt-4 font-mono text-sm text-zinc-500">No signups yet.</p>
            </div>
          ) : (
            entries.map((e, i) => (
              <div
                key={e.id}
                data-testid={`admin-row-${i}`}
                className="grid grid-cols-1 gap-1 border-b border-white/5 px-5 py-4 transition-colors last:border-0 hover:bg-zinc-900/50 md:grid-cols-12 md:gap-4"
              >
                <div className="col-span-4 font-mono text-sm text-white">{e.email}</div>
                <div className="col-span-3 text-sm text-zinc-400">{e.company || "—"}</div>
                <div className="col-span-3 text-sm text-zinc-400">{e.use_case || "—"}</div>
                <div className="col-span-2 font-mono text-xs text-zinc-600">
                  {new Date(e.created_at).toLocaleDateString()}
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
