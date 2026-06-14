import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { useAuth, formatApiErrorDetail } from "../context/AuthContext";
import { Logo } from "../components/Logo";

export default function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user && user.email) navigate("/admin", { replace: true });
  }, [user, navigate]);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email.trim(), password);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(formatApiErrorDetail(err.response?.data?.detail) || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-5">
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md border border-white/10 bg-zinc-950/80 p-8 backdrop-blur-sm lg:p-10"
      >
        <Link to="/" className="inline-flex">
          <Logo />
        </Link>

        <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          <Lock className="h-3.5 w-3.5" /> Admin access
        </div>
        <h1 className="mt-2 font-heading text-2xl font-semibold text-white">Sign in</h1>

        <form data-testid="login-form" onSubmit={submit} className="mt-8 space-y-4">
          <div>
            <label className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Email</label>
            <input
              data-testid="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-500"
              placeholder="admin@ailimits.ai"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Password</label>
            <input
              data-testid="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-500"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p data-testid="login-error" className="font-mono text-xs text-rose-400">
              [BLOCKED] {error}
            </p>
          )}

          <button
            data-testid="login-submit"
            type="submit"
            disabled={loading}
            className="w-full bg-violet-600 px-6 py-3.5 font-medium text-white transition-colors hover:bg-violet-500 disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <Link to="/" className="mt-6 block text-center font-mono text-xs text-zinc-500 hover:text-zinc-300">
          ← Back to site
        </Link>
      </motion.div>
    </div>
  );
}
