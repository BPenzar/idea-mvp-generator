import Footer from "@/components/Footer";
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
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Zašto koristiti naše generatore?
            </h2>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              Sustavni pristup koji štedi vrijeme, novac i osigurava kvalitetu
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Kontrola troškova
                </h3>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  Izbjegni skupe greške u architecturi i scope-u. Naši generatori
                  te vode kroz provjeren framework za tech due diligence.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Ušteda 20-50h
                </h3>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  Od ideje do Claude Code-ready PRD-a za 1-2 sata umjesto
                  tjedana improvizacije i iteracija.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Claude Code Ready
                </h3>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  Tech PRD optimiziran za Claude Code izvršavanje. Copy-paste
                  i dobij funkcionalan MVP za 70%+ funkcionalnosti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Spreman za početak?
            </h2>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              Koristite naše besplatne generatore i pretvorite svoju ideju u konkretnu
              implementaciju već danas.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/generators">
                  Koristite generatore besplatno
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

      <Footer />
    </div>
  );
}
