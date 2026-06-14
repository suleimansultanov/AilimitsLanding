import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, Mail } from "lucide-react";
import {
  SiPython,
  SiFastapi,
  SiNextdotjs,
  SiAmazonwebservices,
  SiGooglecloud,
  SiDocker,
  SiN8N,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
} from "react-icons/si";
import { CONTACT_EMAIL } from "../lib/content";
import { Logo } from "../components/Logo";

const STACK = [
  { name: "Python", Icon: SiPython },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "AWS", Icon: SiAmazonwebservices },
  { name: "GCP", Icon: SiGooglecloud },
  { name: "Docker", Icon: SiDocker },
  { name: "n8n", Icon: SiN8N },
  { name: "LLM APIs", Icon: SiOpenai },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "PyTorch", Icon: SiPytorch },
];

const PROJECTS = [
  {
    tag: "PIPELINES",
    title: "Invoice-automation pipelines",
    body: "Designed and shipped production document-extraction and matching systems for finance workflows — parsing invoices, reconciling against POs and contracts, and flagging discrepancies before posting.",
  },
  {
    tag: "WORKFLOWS",
    title: "n8n workflow automation systems",
    body: "Built reliable, observable automation orchestrating multi-step back-office processes across SaaS tools, queues and databases with retries and audit logging.",
  },
  {
    tag: "AGENTS",
    title: "LLM agent systems",
    body: "Engineered retrieval-grounded agents with tool use, structured outputs and guardrails — keeping models constrained to verifiable, source-backed actions.",
  },
  {
    tag: "RAG",
    title: "RAG systems & knowledge assistants",
    body: "Built end-to-end retrieval-augmented generation pipelines: ingestion, chunking, embeddings, hybrid search and grounded answering with citations.",
  },
  {
    tag: "COMPLIANCE",
    title: "Legal / compliance chatbot",
    body: "Delivered a grounded assistant answering strictly from source documents with citations — designed for domains where a wrong answer is unacceptable.",
  },
  {
    tag: "INFRA",
    title: "Cloud infrastructure (AWS / GCP)",
    body: "8+ years architecting and operating cloud infrastructure, CI/CD and containerized deployments for production ML and web systems.",
  },
];

export default function Founder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Minimal top bar */}
      <header className="border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 lg:px-8">
          <Link to="/" data-testid="founder-logo-home" className="inline-flex">
            <Logo />
          </Link>
          <Link
            to="/"
            data-testid="founder-back-home"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60" />
        <div className="relative mx-auto max-w-5xl px-5 py-20 lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400">FOUNDER</p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tighter sm:text-5xl">
              Suleiman Sultanov
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-violet-400" /> Based in Germany
              </span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                data-testid="founder-email"
                className="flex items-center gap-2 transition-colors hover:text-violet-400"
              >
                <Mail className="h-4 w-4 text-violet-400" /> {CONTACT_EMAIL}
              </a>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 max-w-3xl space-y-5 text-base leading-relaxed text-zinc-300 lg:text-lg"
          >
            <p>
              Fullstack engineer with <span className="text-white">8+ years</span> across fullstack development,
              cloud infrastructure (AWS / GCP) and applied ML/AI. I build RAG systems, LLM-powered automation and
              agentic tools — with a focus on making them reliable enough for real business operations.
            </p>
            <p>
              AILIMITS comes from a simple conviction: agents are only useful in business-critical work if they
              can <span className="text-violet-300">prove what they did</span>. That means verification before
              commit, escalation instead of guessing, and an audit trail behind every decision.
            </p>
          </motion.div>

          {/* Stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-14"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Stack</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {STACK.map(({ name, Icon }) => (
                <span
                  key={name}
                  data-testid={`stack-${name}`}
                  className="flex items-center gap-2 border border-white/10 bg-zinc-950/60 px-3.5 py-2 font-mono text-sm text-zinc-300 transition-colors hover:border-violet-500/50 hover:text-white"
                >
                  <Icon className="h-4 w-4 text-violet-400" />
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Selected work & achievements</p>
            <div className="mt-6 border border-white/10">
              {PROJECTS.map((p, i) => (
                <div
                  key={i}
                  data-testid={`founder-project-${i}`}
                  className={`flex flex-col gap-3 p-7 transition-colors hover:bg-zinc-900 sm:flex-row sm:gap-6 ${
                    i !== PROJECTS.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <div className="w-32 shrink-0">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-violet-400">
                      {p.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium text-white">{p.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <Link
              to="/"
              data-testid="founder-bottom-home"
              className="inline-flex items-center gap-2 bg-violet-600 px-6 py-3 font-medium text-white transition-colors hover:bg-violet-500"
            >
              <ArrowLeft className="h-4 w-4" /> Back to AILIMITS
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
