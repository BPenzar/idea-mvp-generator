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
}

export default function GeneratorCard({
  title,
  description,
  content,
  filename,
  icon,
  githubUrl,
  estimatedTime,
}: GeneratorCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>⏱️</span>
          <span>{estimatedTime}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Content Preview */}
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">{filename}</span>
            <CopyButton text={content} label="Copy Generator" />
          </div>
          <div className="max-h-32 overflow-hidden text-xs text-gray-600">
            <pre className="whitespace-pre-wrap font-mono">{content.slice(0, 200)}...</pre>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild className="flex-1">
            <Link href={githubUrl} target="_blank">
              <span className="mr-2">📂</span>
              View on GitHub
            </Link>
          </Button>
        </div>

        {/* Usage instructions */}
        <div className="rounded-lg bg-blue-50 p-3 text-sm">
          <div className="font-medium text-blue-900">Kako koristiti:</div>
          <ol className="mt-1 list-decimal list-inside text-blue-800 space-y-1">
            <li>Klikni "Copy Generator"</li>
            <li>Otvori Claude ili ChatGPT</li>
            <li>Paste generator i odgovori na pitanja</li>
            <li>Dobij strukturiran output</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
}