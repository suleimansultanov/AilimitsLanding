import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Logo } from "./Logo";

const BrandLogo = () => (
  <Link to="/" data-testid="logo-home-link" className="group">
    <Logo />
  </Link>
);

const LangToggle = () => {
  const { lang, changeLang } = useLanguage();
  return (
    <div data-testid="lang-toggle" className="flex items-center border border-white/10 font-mono text-xs">
      {["en", "ru"].map((l) => (
        <button
          key={l}
          data-testid={`lang-${l}`}
          onClick={() => changeLang(l)}
          className={`px-2.5 py-1 uppercase tracking-wider transition-colors ${
            lang === l ? "bg-violet-600 text-white" : "text-zinc-400 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};

export const Navbar = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const links = [
    { id: "product", label: t.nav.product },
    { id: "how", label: t.nav.how },
    { id: "use-cases", label: t.nav.useCases },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <BrandLogo />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-${l.id}`}
              onClick={() => goToSection(l.id)}
              className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </button>
          ))}
          <Link
            to="/founder"
            data-testid="nav-founder"
            className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
          >
            {t.nav.founder}
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LangToggle />
          <button
            data-testid="nav-early-access"
            onClick={() => goToSection("early-access")}
            className="bg-violet-600 px-4 py-2 font-medium text-white transition-colors hover:bg-violet-500"
          >
            {t.nav.earlyAccess}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <LangToggle />
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center border border-white/10 text-white"
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-white/10 bg-zinc-950/95 px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <button
                key={l.id}
                data-testid={`mobile-nav-${l.id}`}
                onClick={() => goToSection(l.id)}
                className="text-left font-mono text-sm uppercase tracking-wider text-zinc-300"
              >
                {l.label}
              </button>
            ))}
            <Link
              to="/founder"
              onClick={() => setOpen(false)}
              className="text-left font-mono text-sm uppercase tracking-wider text-zinc-300"
            >
              {t.nav.founder}
            </Link>
            <button
              data-testid="mobile-nav-early-access"
              onClick={() => goToSection("early-access")}
              className="bg-violet-600 px-4 py-2.5 text-center font-medium text-white"
            >
              {t.nav.earlyAccess}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};
