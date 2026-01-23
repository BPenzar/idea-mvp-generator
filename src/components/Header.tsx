'use client';

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const LanguageSwitcher = ({
  activeLang,
  onChange,
  labels,
  languages,
  className,
  placement = "below",
}: {
  activeLang: Language;
  onChange: (lang: Language) => void;
  labels: { button: string; menu: string };
  languages: Language[];
  className?: string;
  placement?: "below" | "right" | "inline";
}) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const options = languages.filter((lang) => lang !== activeLang);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const menuId = useId();

  const focusOption = (index: number) => {
    const count = optionRefs.current.length;
    if (!count) {
      return;
    }
    const nextIndex = (index + count) % count;
    optionRefs.current[nextIndex]?.focus();
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setIsLangOpen(true);
      requestAnimationFrame(() => {
        focusOption(event.key === "ArrowDown" ? 0 : options.length - 1);
      });
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setIsLangOpen(false);
      triggerRef.current?.focus();
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const currentIndex = optionRefs.current.findIndex((el) => el === document.activeElement);
      const delta = event.key === "ArrowDown" ? 1 : -1;
      focusOption(currentIndex + delta);
    }
  };

  const handleSelect = (lang: Language) => {
    onChange(lang);
    setIsLangOpen(false);
  };

  useEffect(() => {
    if (!isLangOpen) {
      return;
    }

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (containerRef.current && target && !containerRef.current.contains(target)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isLangOpen]);

  const containerClassName =
    placement === "inline"
      ? `flex items-center gap-2 ${className ?? ""}`
      : `relative ${className ?? ""}`;

  return (
    <div ref={containerRef} className={containerClassName}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsLangOpen((open) => !open)}
        aria-label={labels.button}
        aria-haspopup="menu"
        aria-expanded={isLangOpen}
        aria-controls={menuId}
        onKeyDown={handleTriggerKeyDown}
        className={`h-9 w-9 rounded-full border text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 ${
          isLangOpen
            ? "border-gray-900 text-gray-900 bg-gray-100"
            : "border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300"
        }`}
      >
        {activeLang}
      </button>

      {isLangOpen && (
        <div
          id={menuId}
          role="menu"
          aria-label={labels.menu}
          onKeyDown={handleMenuKeyDown}
          className={`flex gap-2 border border-gray-200 bg-white shadow-lg ${
            placement === "inline"
              ? "ml-2 flex-row rounded-full px-2 py-1"
              : placement === "right"
                ? "absolute left-full top-1/2 ml-2 -translate-y-1/2 flex-row rounded-2xl p-2"
                : "absolute left-1/2 top-full mt-2 -translate-x-1/2 flex-col rounded-2xl p-2"
          }`}
        >
          {options.map((lang, index) => (
            <button
              key={lang}
              type="button"
              role="menuitem"
              onClick={() => handleSelect(lang)}
              ref={(node) => {
                optionRefs.current[index] = node;
              }}
              className="h-9 w-9 rounded-full border border-transparent text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 hover:border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, strings, languages } = useLanguage();

  const externalLink = {
    href: "https://github.com/BPenzar/idea-mvp-generator",
    label: strings.nav.github,
  };

  const feedbackLink = {
    href: "https://qr.bsp-lab.dev/f/vy9My9Xa",
    label: strings.nav.feedback,
  };

  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* BSP Lab Brand */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.bsp-lab.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              {/* BSP Lab Logo */}
              <Image
                src="/logo.png"
                alt="BSP Lab logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
                priority
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">BSP Lab</span>
              </div>
            </Link>

            {/* Project Separator */}
            <div className="hidden h-6 w-px bg-gray-300 sm:block"></div>

            {/* Project Name */}
            <div className="hidden flex-col sm:flex">
              <span className="text-sm font-medium text-gray-900">
                {strings.header.projectName}
              </span>
              <span className="text-xs text-gray-500">{strings.header.projectTagline}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <nav
              className="hidden items-center space-x-4 md:flex"
              aria-label={strings.nav.mainLabel}
            >
              <Link
                href={externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                {externalLink.label}
              </Link>
              <Link
                href={feedbackLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={strings.nav.feedbackAria}
                className="text-sm font-medium transition-colors hover:opacity-75"
                style={{ color: '#64748B' }}
              >
                {feedbackLink.label}
              </Link>
              <LanguageSwitcher
                activeLang={language}
                onChange={(lang) => setLanguage(lang)}
                labels={{
                  button: strings.nav.languageSwitcherLabel,
                  menu: strings.nav.languageMenuLabel,
                }}
                languages={languages}
              />
            </nav>

            <button
              type="button"
              aria-label={strings.nav.menuToggle}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 md:hidden"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="container mx-auto px-4 pb-4 pt-3">
            <nav className="flex flex-col space-y-2">
              <Link
                href={externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCloseMobileMenu}
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                {externalLink.label}
              </Link>
              <Link
                href={feedbackLink.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCloseMobileMenu}
                aria-label={strings.nav.feedbackAria}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
                style={{ color: '#64748B' }}
              >
                {feedbackLink.label}
              </Link>
              <LanguageSwitcher
                activeLang={language}
                onChange={(lang) => {
                  setLanguage(lang);
                  handleCloseMobileMenu();
                }}
                labels={{
                  button: strings.nav.languageSwitcherLabel,
                  menu: strings.nav.languageMenuLabel,
                }}
                className="mt-2"
                placement="inline"
                languages={languages}
              />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
