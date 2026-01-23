import Footer from "@/components/Footer";
import GeneratorCard from "@/components/GeneratorCard";
import type { Metadata } from "next";
import fs from "fs/promises";
import path from "path";
import { defaultLanguage, translations, type GeneratorId } from "@/i18n/translations";

const meta = translations[defaultLanguage].meta;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
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
    title: meta.title,
    description: meta.description,
    url: "https://mvp.bsp-lab.dev/generators"
  }
};

const generatorConfigs: Array<{
  id: GeneratorId;
  filename: string;
  icon: string;
  githubUrl: string;
}> = [
  {
    id: "discovery",
    filename: "1_Discovery_Generator.md",
    icon: "🔍",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/1_Discovery_Generator.md",
  },
  {
    id: "business",
    filename: "2_Business_PRD_Generator.md",
    icon: "📋",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/2_Business_PRD_Generator.md",
  },
  {
    id: "tech",
    filename: "3_Tech_PRD_Generator.md",
    icon: "⚡",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/3_Tech_PRD_Generator.md",
  },
  {
    id: "interview",
    filename: "4_PRD_Interview.md",
    icon: "💬",
    githubUrl: "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators/4_PRD_Interview.md",
  },
];

async function getGeneratorContent(filename: string) {
  const filePath = path.join(process.cwd(), "public", "generators", filename);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    return fileContent;
  } catch (error) {
    console.error(`Failed to load generator file: ${filename}`, error);
    return translations[defaultLanguage].generators.unavailable;
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
      {/* Generators Grid */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {generators.map((generator) => (
            <GeneratorCard
              key={generator.id}
              id={generator.id}
              content={generator.content}
              filename={generator.filename}
              icon={generator.icon}
              githubUrl={generator.githubUrl}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
