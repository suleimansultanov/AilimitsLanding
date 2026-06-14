import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  GitBranch,
  ScrollText,
  FileText,
  Database,
  FileCheck2,
  Workflow,
  AlertTriangle,
  EyeOff,
  FileX2,
  UserCog,
} from "lucide-react";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AuditTerminal } from "../components/AuditTerminal";
import { WaitlistForm } from "../components/WaitlistForm";
import { Reveal, Overline } from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";

const PROBLEM_ICONS = [AlertTriangle, EyeOff, FileX2, UserCog];
const STEP_ICONS = [ShieldCheck, GitBranch, ScrollText];
const USECASE_ICONS = [FileText, Database, FileCheck2, Workflow];

export default function Home() {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      {/* HERO */}
      <section id="product" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 grid-bg grid-bg-fade" />
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-violet-500/30 bg-violet-600/5 px-3 py-1.5"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-violet-300">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-6xl"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
            >
              {t.hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.19 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <button
                data-testid="hero-cta-primary"
                onClick={() => scrollTo("early-access")}
                className="bg-violet-600 px-6 py-3.5 font-medium text-white transition-colors hover:bg-violet-500"
              >
                {t.hero.ctaPrimary}
              </button>
              <button
                data-testid="hero-cta-secondary"
                onClick={() => scrollTo("how")}
                className="border border-zinc-700 bg-transparent px-6 py-3.5 font-medium text-white transition-colors hover:bg-zinc-900"
              >
                {t.hero.ctaSecondary}
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 font-mono text-xs text-zinc-600"
            >
              {t.hero.meta}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <AuditTerminal />
          </motion.div>
        </div>
      </section>

      {/* LOGLINE */}
      <div className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
          <p className="flex items-center gap-3 font-mono text-sm text-zinc-400">
            <span className="text-violet-400">//</span>
            {t.logline}
          </p>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="bg-black py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <Overline>{t.problem.overline}</Overline>
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-white lg:text-4xl">
              {t.problem.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 lg:text-lg">
              {t.problem.lead}
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {t.problem.items.map((item, i) => {
              const Icon = PROBLEM_ICONS[i];
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div
                    data-testid={`problem-card-${i}`}
                    className="group h-full bg-zinc-950 p-7 transition-colors hover:bg-zinc-900"
                  >
                    <Icon className="h-6 w-6 text-rose-400/80" strokeWidth={1.5} />
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
                      {item.tag}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <Overline>{t.solution.overline}</Overline>
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-white lg:text-4xl">
              {t.solution.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 lg:text-lg">
              {t.solution.lead}
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
            {t.solution.steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div
                    data-testid={`step-card-${i}`}
                    className="flex h-full flex-col bg-zinc-950 p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center border border-violet-500/40 bg-violet-600/10">
                        <Icon className="h-5 w-5 text-violet-400" strokeWidth={1.75} />
                      </span>
                      <span className="font-mono text-3xl font-semibold text-zinc-800">{step.n}</span>
                    </div>
                    <h3 className="mt-6 font-heading text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{step.body}</p>
                    <div className="mt-6 border-l-2 border-emerald-500/40 bg-emerald-500/[0.03] px-3 py-2">
                      <p className="font-mono text-[11px] leading-relaxed text-emerald-400/90">{step.log}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" className="border-t border-white/10 bg-black py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <Overline>{t.useCases.overline}</Overline>
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-white lg:text-4xl">
              {t.useCases.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 lg:text-lg">
              {t.useCases.lead}
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.useCases.items.map((item, i) => {
              const Icon = USECASE_ICONS[i];
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div
                    data-testid={`usecase-card-${i}`}
                    className="group h-full border border-white/10 bg-zinc-950/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:bg-zinc-900"
                  >
                    <Icon className="h-6 w-6 text-violet-400" strokeWidth={1.5} />
                    <h3 className="mt-5 font-heading text-base font-medium text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <Overline>{t.track.overline}</Overline>
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-white lg:text-4xl">
              {t.track.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 lg:text-lg">
              {t.track.lead}
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {t.track.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  data-testid={`track-card-${i}`}
                  className="flex h-full items-start gap-4 bg-zinc-950 p-7 transition-colors hover:bg-zinc-900"
                >
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-emerald-500/40 bg-emerald-500/5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
                      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">{item.tag}</p>
                    <h3 className="mt-1.5 font-heading text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EARLY ACCESS */}
      <section id="early-access" className="relative overflow-hidden border-t border-white/10 bg-black py-24 lg:py-32">
        <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <Reveal>
              <Overline>{t.earlyAccess.overline}</Overline>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white lg:text-4xl">
                {t.earlyAccess.title}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-400 lg:text-lg">
                {t.earlyAccess.lead}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="border border-white/10 bg-zinc-950/60 p-7 backdrop-blur-sm lg:p-9">
                <WaitlistForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
