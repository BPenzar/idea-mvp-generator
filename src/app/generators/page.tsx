import Footer from "@/components/Footer";
import GeneratorCard from "@/components/GeneratorCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import fs from "fs/promises";
import path from "path";

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

const generatorConfigs = [
  {
    id: "discovery",
    title: "1. Discovery Generator",
    description: "Evaluirajte i rankirajte startup ideje kroz prošireni RICE framework",
    filename: "1_Discovery_Generator.md",
    icon: "🔍",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/1_Discovery_Generator.md",
    estimatedTime: "20-30 min",
  },
  {
    id: "business",
    title: "2. Business PRD Generator",
    description: "Kreirajte sveobuhvatan Business PRD s MVP scope i ROI procjenom",
    filename: "2_Business_PRD_Generator.md",
    icon: "📋",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/2_Business_PRD_Generator.md",
    estimatedTime: "30-45 min",
  },
  {
    id: "tech",
    title: "3. Tech PRD Generator",
    description: "Generirajte Claude Code-ready tehnički PRD s kompletnom arhitekturom",
    filename: "3_Tech_PRD_Generator.md",
    icon: "⚡",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/3_Tech_PRD_Generator.md",
    estimatedTime: "45-60 min",
  },
  {
    id: "interview",
    title: "4. PRD Interview Assistant",
    description: "Strukturirani interview za kreiranje PRD-a kroz razgovor. Kombinacija Business i Tech PRD generatora.",
    filename: "4_PRD_Interview.md",
    icon: "💬",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/4_PRD_Interview.md",
    estimatedTime: "60-90 min",
  },
];

async function getGeneratorContent(filename: string) {
  const filePath = path.join(process.cwd(), "public", "generators", filename);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    return fileContent;
  } catch (error) {
    console.error(`Failed to load generator file: ${filename}`, error);
    return "Generator trenutno nije dostupan. Posjetite GitHub link iznad za najnoviju verziju.";
  }
}

export default async function GeneratorsPage() {
  const generators = await Promise.all(
    generatorConfigs.map(async (generator) => ({
      ...generator,
      content: await getGeneratorContent(generator.filename),
    }))
  );

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

      {/* Collaboration Invite */}
      <div className="bg-white border-t">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
              BSP Lab suradnja
            </div>

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Pretvorite PRD u validiran roadmap i MVP isporuku
            </h2>

            <p className="mx-auto mb-6 max-w-3xl text-base text-gray-600 sm:text-lg">
              Ako ste uz pomoć generatora dobili jasniji smjer, nastavimo razgovor. BSP Lab vodi timove od discoveryja
              do implementacije kroz product strategiju, UX istraživanja i AI automatizaciju. Provjerite studije slučaja
              i set usluga na službenoj stranici ili se javite direktno.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="https://www.bsp-lab.dev" target="_blank" rel="noopener noreferrer">
                  Posjeti bsp-lab.dev
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="mailto:penzar.bruno@gmail.com">
                  Kontakt mail
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
