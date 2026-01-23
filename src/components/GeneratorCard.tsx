"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CopyButton from "./CopyButton";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import type { GeneratorId } from "@/i18n/translations";

interface GeneratorCardProps {
  id: GeneratorId;
  content: string;
  filename: string;
  icon: string;
  githubUrl: string;
}

export default function GeneratorCard({
  id,
  content,
  filename,
  icon,
  githubUrl,
}: GeneratorCardProps) {
  const { strings } = useLanguage();
  const generator = strings.generators.items[id];
  const cardLabels = strings.generators.card;
  const usageSteps = generator.instructions;

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <span className="text-2xl">{icon}</span>
          <div className="space-y-1 text-left">
            <CardTitle className="text-xl">{generator.title}</CardTitle>
            <CardDescription className="text-sm leading-6">{generator.description}</CardDescription>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <span>⏱️</span>
          <span>{generator.estimatedTime}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Content Preview */}
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-medium text-gray-700">{filename}</span>
            <CopyButton
              text={content}
              label={cardLabels.copyLabel}
              copiedLabel={cardLabels.copiedLabel}
              className="w-full sm:w-auto justify-center"
            />
          </div>
          <div className="max-h-40 overflow-hidden text-xs text-gray-600">
            <pre className="whitespace-pre-wrap font-mono leading-5">{content.slice(0, 200)}...</pre>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" size="sm" asChild className="w-full sm:flex-1">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <span className="mr-2">📂</span>
              {cardLabels.viewOnGithub}
            </Link>
          </Button>
        </div>

        {/* Usage instructions */}
        <div className="rounded-lg bg-blue-50 p-4 text-sm">
          <div className="font-medium text-blue-900">{cardLabels.howToUse}:</div>
          <ol className="mt-2 list-decimal list-inside space-y-1 text-blue-800">
            {usageSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </CardContent>
    </Card>
  );
}
