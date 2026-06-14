import React, { createContext, useContext, useState, useCallback } from "react";
import { content } from "../lib/content";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("ailimits_lang") || "en");

  const changeLang = useCallback((next) => {
    setLang(next);
    localStorage.setItem("ailimits_lang", next);
  }, []);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "ru" : "en";
      localStorage.setItem("ailimits_lang", next);
      return next;
    });
  }, []);

  const t = content[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, changeLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
