"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function GeneratorsIntro() {
  const { strings } = useLanguage();

  return (
    <div className="mx-auto mb-8 max-w-3xl text-center text-sm text-gray-600 sm:text-base">
      {strings.generators.intro}
    </div>
  );
}
