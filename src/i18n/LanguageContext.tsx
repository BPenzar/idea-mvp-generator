"use client";

import { createContext, useContext } from "react";
import { translations, type Language } from "@/i18n/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  strings: typeof translations[Language];
  languages: Language[];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageContext, useLanguage };
