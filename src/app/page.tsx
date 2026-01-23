import Footer from "@/components/Footer";
import GeneratorCard from "@/components/GeneratorCard";
import type { Metadata } from "next";
import fs from "fs/promises";
import path from "path";
import {
  defaultLanguage,
  languageOrder,
  translations,
  type GeneratorId,
  type Language,
} from "@/i18n/translations";

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
    "startup validation",
  ],
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://mvp.bsp-lab.dev",
  },
};

const languageFolderMap: Record<Language, string> = {
  EN: "en",
  HR: "hr",
  DE: "de",
};

const generatorConfigs: Array<{
  id: GeneratorId;
  filename: string;
  icon: string;
}> = [
  {
    id: "discovery",
    filename: "1_Discovery_Generator.md",
    icon: "🔍",
  },
  {
    id: "business",
    filename: "2_Business_PRD_Generator.md",
    icon: "📋",
  },
  {
    id: "tech",
    filename: "3_Tech_PRD_Generator.md",
    icon: "⚡",
  },
  {
    id: "interview",
    filename: "4_PRD_Interview.md",
    icon: "💬",
  },
];

const githubBaseUrl =
  "https://github.com/BPenzar/idea-mvp-generator/blob/main/public/generators";

const getGeneratorContent = async (language: Language, filename: string) => {
  const folder = languageFolderMap[language];
  const filePath = path.join(process.cwd(), "public", "generators", folder, filename);

  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (error) {
    if (language !== defaultLanguage) {
      return getGeneratorContent(defaultLanguage, filename);
    }
    console.error(`Failed to load generator file: ${filename}`, error);
    return translations[defaultLanguage].generators.unavailable;
  }
};

const getGeneratorContentByLanguage = async (filename: string) => {
  const entries = await Promise.all(
    languageOrder.map(async (language) => [language, await getGeneratorContent(language, filename)]),
  );
  return Object.fromEntries(entries) as Record<Language, string>;
};

const getFilenameByLanguage = (filename: string) =>
  Object.fromEntries(
    languageOrder.map((language) => [
      language,
      `${languageFolderMap[language]}/${filename}`,
    ]),
  ) as Record<Language, string>;

const getGithubUrlByLanguage = (filename: string) =>
  Object.fromEntries(
    languageOrder.map((language) => [
      language,
      `${githubBaseUrl}/${languageFolderMap[language]}/${filename}`,
    ]),
  ) as Record<Language, string>;

export default async function Home() {
  const generators = await Promise.all(
    generatorConfigs.map(async (generator) => ({
      ...generator,
      contentByLanguage: await getGeneratorContentByLanguage(generator.filename),
      filenameByLanguage: getFilenameByLanguage(generator.filename),
      githubUrlByLanguage: getGithubUrlByLanguage(generator.filename),
    })),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {generators.map((generator) => (
            <GeneratorCard
              key={generator.id}
              id={generator.id}
              contentByLanguage={generator.contentByLanguage}
              filenameByLanguage={generator.filenameByLanguage}
              icon={generator.icon}
              githubUrlByLanguage={generator.githubUrlByLanguage}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
