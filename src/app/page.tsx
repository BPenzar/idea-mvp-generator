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
                <Link href="https://github.com/brunopenzar/idea-mvp-generator" target="_blank">
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
          <div className="text-center">
            <p className="text-gray-600">
              Created by{" "}
              <a
                href="https://brunopenzar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 hover:text-blue-600"
              >
                Bruno Penzar
              </a>{" "}
              • Open source na{" "}
              <a
                href="https://github.com/brunopenzar/idea-mvp-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 hover:text-blue-600"
              >
                GitHub-u
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
