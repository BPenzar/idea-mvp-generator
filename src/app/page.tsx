import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Zašto koristiti naše generatore?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Sistematičan pristup koji štedi vrijeme, novac i osigurava kvalitetu
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Ušteda €5.000+
                </h3>
                <p className="mt-2 text-gray-600">
                  Izbjegni skupe greške u architecturi i scope-u. Naši generatori
                  te vode kroz proven framework za tech due diligence.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Ušteda 20-50h
                </h3>
                <p className="mt-2 text-gray-600">
                  Od ideje do Claude Code-ready PRD-a za 1-2 sata umjesto
                  tjedana improvizacije i iteracija.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Claude Code Ready
                </h3>
                <p className="mt-2 text-gray-600">
                  Tech PRD optimiziran za Claude Code izvršavanje. Copy-paste
                  i dobij funkcionalan MVP za 70%+ funkcionalnosti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Spreman za početak?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Koristi naše besplatne generatore i pretvori svoju ideju u konkretnu
              implementaciju već danas.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/generators">
                  Koristi generatore besplatno
                </Link>
              </Button>

              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="https://github.com/BPenzar/idea-mvp-generator" target="_blank">
                  Vidi kod na GitHub-u
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              ✅ Besplatno za uvijek • ✅ Open source • ✅ Nema prijave
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-6">
              <a
                href="https://x.com/Brunopenzar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Twitter/X"
              >
                <span className="text-lg font-bold">𝕏</span>
              </a>
              <a
                href="https://github.com/BPenzar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-penzar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
              </a>
              <a
                href="mailto:penzar.bruno@gmail.com"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Email"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>

            <div className="text-gray-600">
              <p className="mb-2">
                © 2025{" "}
                <a
                  href="https://www.bsp-lab.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  BSP Lab
                </a>
                {" "}• Bruno Penzar
              </p>
              <p className="text-sm">
                Open source na{" "}
                <a
                  href="https://github.com/BPenzar/idea-mvp-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-900 hover:text-blue-600 underline"
                >
                  GitHub-u
                </a>
                {" "}• Kontakt:{" "}
                <a
                  href="mailto:penzar.bruno@gmail.com"
                  className="font-medium text-gray-900 hover:text-blue-600"
                >
                  penzar.bruno@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
