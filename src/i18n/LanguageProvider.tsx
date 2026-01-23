"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { defaultLanguage, languageOrder, translations, type Language } from "@/i18n/translations";
import { LanguageContext } from "@/i18n/LanguageContext";

const STORAGE_KEY = "mvp-language";
const languageHtmlMap: Record<Language, string> = {
  EN: "en",
  HR: "hr",
  DE: "de",
};
const ogLocaleMap: Record<Language, string> = {
  EN: "en_US",
  HR: "hr_HR",
  DE: "de_DE",
};

const isLanguage = (value: string): value is Language => languageOrder.includes(value as Language);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return defaultLanguage;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isLanguage(stored)) {
      return stored;
    }
    return defaultLanguage;
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    document.documentElement.lang = languageHtmlMap[language];
  }, [language]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    const { meta } = translations[language];
    if (!meta) {
      return;
    }

    document.title = meta.title;

    const setMeta = (selector: string, content: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) {
        element.setAttribute("content", content);
      }
    };

    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[name="twitter:title"]', meta.title);
    setMeta('meta[name="twitter:description"]', meta.description);
    setMeta('meta[property="og:locale"]', ogLocaleMap[language]);
  }, [language]);

  const strings = useMemo(() => translations[language], [language]);

  const value = useMemo(
    () => ({ language, setLanguage, strings, languages: languageOrder }),
    [language, strings],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export { LanguageProvider };
