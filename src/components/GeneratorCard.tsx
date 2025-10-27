import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CopyButton from "./CopyButton";
import Link from "next/link";

interface GeneratorCardProps {
  title: string;
  description: string;
  content: string;
  filename: string;
  icon: string;
  githubUrl: string;
  estimatedTime: string;
  instructions?: string[];
}

export default function GeneratorCard({
  title,
  description,
  content,
  filename,
  icon,
  githubUrl,
  estimatedTime,
  instructions,
}: GeneratorCardProps) {
  const usageSteps =
    instructions ?? [
      "Copy-paste generator u Claude ili ChatGPT",
      "Odgovori na pitanja redom i dodaj kontekst gdje treba",
      "Na kraju zatraži finalni dokument za export",
    ];

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <span className="text-2xl">{icon}</span>
          <div className="space-y-1 text-left">
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-sm leading-6">{description}</CardDescription>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <span>⏱️</span>
          <span>{estimatedTime}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Content Preview */}
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-medium text-gray-700">{filename}</span>
            <CopyButton text={content} label="Copy Generator" className="w-full sm:w-auto justify-center" />
          </div>
          <div className="max-h-40 overflow-hidden text-xs text-gray-600">
            <pre className="whitespace-pre-wrap font-mono leading-5">{content.slice(0, 200)}...</pre>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" size="sm" asChild className="w-full sm:flex-1">
            <Link href={githubUrl} target="_blank">
              <span className="mr-2">📂</span>
              View on GitHub
            </Link>
          </Button>
        </div>

        {/* Usage instructions */}
        <div className="rounded-lg bg-blue-50 p-4 text-sm">
          <div className="font-medium text-blue-900">Kako koristiti:</div>
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
