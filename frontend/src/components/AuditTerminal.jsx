import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const LINES_EN = [
  { type: "verified", text: "Invoice #3292 matched against PO-1187 — totals reconcile" },
  { type: "verified", text: "Tax ID 84-2210 validated against vendor master" },
  { type: "escalated", text: "Line 4 amount deviates 12% from contract — routed to reviewer" },
  { type: "logged", text: "Decision #88a1 committed · 3 inputs · evidence attached" },
  { type: "verified", text: "Bank IBAN checksum verified for payment batch B-204" },
  { type: "blocked", text: "Duplicate invoice #3290 detected — commit blocked" },
  { type: "verified", text: "GL code 6100 confirmed against approval policy" },
  { type: "logged", text: "Audit trail exported · 142 actions · 0 unverified" },
];

const LINES_RU = [
  { type: "verified", text: "Счёт #3292 сверен с PO-1187 — суммы сходятся" },
  { type: "verified", text: "ИНН 84-2210 проверен по справочнику поставщиков" },
  { type: "escalated", text: "Сумма в строке 4 отклоняется на 12% — на проверку" },
  { type: "logged", text: "Решение #88a1 проведено · 3 входа · доказательства приложены" },
  { type: "verified", text: "Контрольная сумма IBAN проверена для платежа B-204" },
  { type: "blocked", text: "Обнаружен дубликат счёта #3290 — проведение заблокировано" },
  { type: "verified", text: "Код ГК 6100 подтверждён по политике согласования" },
  { type: "logged", text: "Аудит-трейл выгружен · 142 действия · 0 непроверенных" },
];

const META = {
  verified: { label: "VERIFIED", color: "text-emerald-400", dot: "bg-emerald-400" },
  escalated: { label: "ESCALATED", color: "text-amber-400", dot: "bg-amber-400" },
  blocked: { label: "BLOCKED", color: "text-rose-400", dot: "bg-rose-400" },
  logged: { label: "LOGGED", color: "text-violet-400", dot: "bg-violet-400" },
};

const stamp = () => {
  const d = new Date();
  return d.toTimeString().slice(0, 8);
};

export const AuditTerminal = () => {
  const { lang } = useLanguage();
  const source = lang === "ru" ? LINES_RU : LINES_EN;
  const [rows, setRows] = useState([]);
  const idx = useRef(0);

  useEffect(() => {
    setRows([]);
    idx.current = 0;
    const interval = setInterval(() => {
      const line = source[idx.current % source.length];
      setRows((prev) => {
        const next = [...prev, { ...line, ts: stamp(), key: Date.now() + Math.random() }];
        return next.slice(-6);
      });
      idx.current += 1;
    }, 1800);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <div
      data-testid="audit-terminal"
      className="border border-white/10 bg-zinc-950/80 backdrop-blur-sm shadow-2xl shadow-violet-950/20"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          ailimits · audit-stream
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          live
        </span>
      </div>
      <div className="h-[280px] space-y-2 overflow-hidden p-4 font-mono text-[13px] leading-relaxed">
        <AnimatePresence initial={false}>
          {rows.map((r) => {
            const m = META[r.type];
            return (
              <motion.div
                key={r.key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex items-start gap-3"
              >
                <span className="shrink-0 text-zinc-600">{r.ts}</span>
                <span className={`flex shrink-0 items-center gap-1.5 ${m.color}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${m.dot}`} />
                  [{m.label}]
                </span>
                <span className="text-zinc-300">{r.text}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
