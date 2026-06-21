import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// Formspree form ID — get one for free at https://formspree.io
// (create a form, copy the code from the endpoint https://formspree.io/f/XXXXXXX).
// Can also be provided at build time via REACT_APP_FORMSPREE_ID.
const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID || "xkolwvbd";
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const WaitlistForm = () => {
  const { t } = useLanguage();
  const c = t.earlyAccess;
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [useCase, setUseCase] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setMessage(c.invalid);
      return;
    }
    setStatus("loading");
    try {
      await axios.post(
        FORMSPREE_URL,
        {
          email: email.trim(),
          company: company.trim(),
          use_case: useCase.trim(),
        },
        { headers: { Accept: "application/json" } },
      );
      setStatus("success");
      setMessage(c.successBody);
    } catch {
      setStatus("error");
      setMessage(c.error);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        data-testid="waitlist-success"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border border-emerald-500/30 bg-emerald-500/5 p-8"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-emerald-500/50 bg-emerald-500/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
              <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
          </span>
          <p className="font-heading text-xl font-semibold text-white">{c.success}</p>
        </div>
        <p className="mt-3 text-sm text-zinc-400">{message}</p>
        <p className="mt-4 font-mono text-xs text-emerald-400/80">[VERIFIED] signup recorded · evidence logged</p>
      </motion.div>
    );
  }

  return (
    <form data-testid="waitlist-form" onSubmit={submit} noValidate className="space-y-4">
      <div>
        <label className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{c.emailLabel}</label>
        <input
          data-testid="waitlist-email-input"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={c.emailPlaceholder}
          className="mt-2 w-full border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-500"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          data-testid="waitlist-company-input"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder={c.companyPlaceholder}
          className="w-full border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-500"
        />
        <input
          data-testid="waitlist-usecase-input"
          type="text"
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
          placeholder={c.useCasePlaceholder}
          className="w-full border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-500"
        />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            data-testid="waitlist-error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-mono text-xs text-rose-400"
          >
            [BLOCKED] {message}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        data-testid="waitlist-submit"
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-violet-600 px-6 py-3.5 font-medium text-white transition-colors hover:bg-violet-500 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? c.submitting : c.submit}
      </button>
    </form>
  );
};
