"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  text: string;
  label?: string;
  copiedLabel?: string;
  ariaLabel?: string;
  className?: string;
}

export default function CopyButton({
  text,
  label = "Copy",
  copiedLabel = "Copied!",
  ariaLabel,
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant={copied ? "default" : "outline"}
      size="sm"
      className={className}
      aria-label={ariaLabel ?? label}
    >
      {copied ? (
        <>
          <span className="mr-2">✓</span>
          {copiedLabel}
        </>
      ) : (
        <>
          <span className="mr-2">📋</span>
          {label}
        </>
      )}
    </Button>
  );
}
