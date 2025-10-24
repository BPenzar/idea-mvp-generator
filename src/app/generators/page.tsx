import type { Metadata } from "next";
import GeneratorCard from "@/components/GeneratorCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Generatori za PRD Development - Idea & MVP Generator",
  description: "Besplatni open-source generatori koji te vode kroz sistematičan proces od ideje do Claude Code-ready tehničke specifikacije. Discovery, Business PRD, Tech PRD i Interview Assistant.",
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
    description: "Evaluiraj i rankovi startup ideje kroz prošireni RICE framework",
    content: "DISCOVERY GENERATOR - Idea Evaluation & Ranking\n\nSistematičan proces evaluacije startup ideja kroz RICE+ framework s 15 ključnih pitanja za kontekst, resurse, ciljeve i risk toleranciju. \n\nDobivaš objektivan scoring i preporuke za sljedeće korake. Koristi za evaluaciju 3-7 ideja i odabir najbolje za implementaciju.\n\nProcess traje 20-30 minuta.",
    filename: "1_Discovery_Generator.md",
    icon: "🔍",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/1_Discovery_Generator.md",
    estimatedTime: "20-30 min",
  },
  {
    id: "business",
    title: "2. Business PRD Generator",
    description: "Kreiraj sveobuhvatan Business PRD s MVP scope i ROI procjenom",
    content: "BUSINESS PRD GENERATOR\n\nKreira sveobuhvatan Business Product Requirements Document na temelju odabrane ideje.\n\nUključuje problem statement, target users, solution design, MVP scope, business model, go-to-market strategiju i success metrike.\n\nDobivaš Go/Refine/Hold preporuku s obrazloženjem.",
    filename: "2_Business_PRD_Generator.md",
    icon: "📋",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/2_Business_PRD_Generator.md",
    estimatedTime: "30-45 min",
  },
  {
    id: "tech",
    title: "3. Tech PRD Generator",
    description: "Generiraj Claude Code-ready tehnički PRD s kompletnom arhitekturom",
    content: "TECH PRD GENERATOR - Claude Code Ready\n\nKreira detaljni tehnički PRD optimiziran za Claude Code izvršavanje.\n\nUključuje tech stack decisions, system architecture, database schema, API design, file structure i implementation plan.\n\nOmogućuje Claude Code-u da implementira 80%+ funkcionalnosti bez dodatnih pitanja.",
    filename: "3_Tech_PRD_Generator.md",
    icon: "⚡",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/3_Tech_PRD_Generator.md",
    estimatedTime: "45-60 min",
  },
  {
    id: "interview",
    title: "4. PRD Interview Assistant",
    description: "Strukturirani interview za kreiranje PRD-a kroz razgovor",
    content: "PRD INTERVIEW ASSISTANT\n\nVođeni razgovor koji te provodi kroz sve faze kreiranja PRD-a - od problema i rješenja do business modela i tech specifikacija.\n\nPrirodan interview flow umjesto dugačkih formi. Dobivaš kompletan PRD kroz 60-90 minuta razgovora.",
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              AI Generatori za PRD Development
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Besplatni open-source generatori koji te vode kroz sistematičan proces
              od ideje do Claude Code-ready tehničke specifikacije. Copy-paste u svoj
              omiljeni AI asistent i kreiraj profesionalne PRD-ove.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/">
                ← Povratak na početnu
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Generators Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 text-sm font-medium text-gray-700 mb-4">
              <span>🚀</span>
              <span>Coming Soon</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Automatizirana verzija u razvoju
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Radimo na web aplikaciji koja će automatski pokretati ove generatore
              kroz LLM integraciju. Upload ovdje, dobij finalni PRD za Claude Code!
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
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
    </div>
  );
}