import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Od ideje do proizvoda{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              za 1-2 sata
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            Besplatni AI generatori za provjeru i strukturiranje projekata.
            Uštedite €5.000+ i 20-50 sati razvoja kroz sustavni proces
            od Discovery-ja do Claude Code-ready Tech PRD-a.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/generators">
                Koristite generatore besplatno
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="https://github.com/BPenzar/idea-mvp-generator" target="_blank">
                Vidi na GitHub-u
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              Open-source
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              Claude Code ready
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              ROI usmjereno
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}