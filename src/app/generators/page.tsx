import Footer from "@/components/Footer";
import GeneratorCard from "@/components/GeneratorCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Generatori za PRD Development - Idea & MVP Generator",
  description: "Besplatni open-source generatori koji vas vode kroz sustavni proces od ideje do Claude Code-ready tehničke specifikacije. Discovery, Business PRD, Tech PRD i Interview Assistant.",
  keywords: [
    "Discovery Generator",
    "Business PRD Generator",
    "Tech PRD Generator",
    "PRD Interview Assistant",
    "RICE framework",
    "product requirements",
    "Claude Code ready",
    "startup validation"
  ],
  openGraph: {
    title: "AI Generatori za PRD Development",
    description: "Besplatni open-source generatori za kreiranje profesionalnih PRD-ova",
    url: "https://idea-mvp-generator.vercel.app/generators"
  }
};

// Generator data with simple content
const generators = [
  {
    id: "discovery",
    title: "1. Discovery Generator",
    description: "Evaluirajte i rankirajte startup ideje kroz prošireni RICE framework",
    content: "DISCOVERY GENERATOR - Idea Evaluation & Ranking\n\nSustavni proces evaluacije startup ideja kroz RICE+ framework s 15 ključnih pitanja za kontekst, resurse, ciljeve i toleranciju rizika. \n\nDobivate objektivan scoring i preporuke za sljedeće korake. Koristite za evaluaciju 3-7 ideja i odabir najbolje za implementaciju.\n\nProces traje 20-30 minuta.",
    filename: "1_Discovery_Generator.md",
    icon: "🔍",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/1_Discovery_Generator.md",
    estimatedTime: "20-30 min",
  },
  {
    id: "business",
    title: "2. Business PRD Generator",
    description: "Kreirajte sveobuhvatan Business PRD s MVP scope i ROI procjenom",
    content: "BUSINESS PRD GENERATOR\n\nKreira sveobuhvatan Business Product Requirements Document na temelju odabrane ideje.\n\nUključuje problem statement, target users, solution design, MVP scope, business model, go-to-market strategiju i success metrike.\n\nDobivate Go/Refine/Hold preporuku s obrazloženjem.",
    filename: "2_Business_PRD_Generator.md",
    icon: "📋",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/2_Business_PRD_Generator.md",
    estimatedTime: "30-45 min",
  },
  {
    id: "tech",
    title: "3. Tech PRD Generator",
    description: "Generirajte Claude Code-ready tehnički PRD s kompletnom arhitekturom",
    content: "TECH PRD GENERATOR - Claude Code Ready\n\nKreira detaljni tehnički PRD optimiziran za Claude Code izvršavanje.\n\nUključuje tech stack decisions, system architecture, database schema, API design, file structure i implementation plan.\n\nOmogućuje Claude Code-u da implementira 80%+ funkcionalnosti bez dodatnih pitanja.",
    filename: "3_Tech_PRD_Generator.md",
    icon: "⚡",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/3_Tech_PRD_Generator.md",
    estimatedTime: "45-60 min",
  },
  {
    id: "interview",
    title: "4. PRD Interview Assistant",
    description: "Strukturirani interview za kreiranje PRD-a kroz razgovor. Kombinacija Business i Tech PRD generatora.",
    content: "PRD INTERVIEW ASSISTANT\n\nVođeni razgovor koji vas provodi kroz sve faze kreiranja PRD-a - od problema i rješenja do business modela i tech specifikacija.\n\nPrirodan interview flow umjesto dugačkih formi. Dobivate kompletan PRD kroz 60-90 minuta razgovora.",
    filename: "4_PRD_Interview.md",
    icon: "💬",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/4_PRD_Interview.md",
    estimatedTime: "60-90 min",
  },
];

export default function GeneratorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 sm:py-12">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              AI Generatori za PRD Development
            </h1>
            <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg">
              Besplatni open-source generatori koji vas vode kroz sustavni proces
              od ideje do Claude Code-ready tehničke specifikacije. Copy-paste u svoj
              omiljeni AI asistent i kreirajte profesionalne PRD-ove.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/">
                ← Povratak na početnu
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Generators Grid */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {generators.map((generator) => (
            <GeneratorCard
              key={generator.id}
              title={generator.title}
              description={generator.description}
              content={generator.content}
              filename={generator.filename}
              icon={generator.icon}
              githubUrl={generator.githubUrl}
              estimatedTime={generator.estimatedTime}
            />
          ))}
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-white border-t">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 px-5 py-3 text-sm font-medium text-gray-700">
              <span>🚀</span>
              <span>Coming Soon</span>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Automatizirana verzija u razvoju
            </h2>

            <p className="mx-auto mb-6 max-w-2xl text-base text-gray-600 sm:text-lg">
              Radimo na web aplikaciji koja će automatski pokretati ove generatore
              kroz LLM integraciju. Upload ovdje, dobijte finalni PRD za Claude Code!
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500 sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Auto-save napretka</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>Claude + OpenAI integracija</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                <span>One-click eksport</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
