import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { CONTACT_EMAIL } from "../lib/content";
import { Logo } from "./Logo";

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-zinc-400">{t.footer.tagline}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-zinc-600">
              {t.footer.builtIn}
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{t.footer.contact}</p>
              <a
                data-testid="footer-contact-email"
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 block text-sm text-zinc-300 transition-colors hover:text-violet-400"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{t.nav.product}</p>
              <Link
                data-testid="footer-founder-link"
                to="/founder"
                className="mt-3 block text-sm text-zinc-300 transition-colors hover:text-violet-400"
              >
                {t.footer.founder}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-zinc-600">{t.footer.rights}</p>
          <p className="font-mono text-xs text-zinc-600">suleimansultanov.com</p>
        </div>
      </div>
    </footer>
  );
};
