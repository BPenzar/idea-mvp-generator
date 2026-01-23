export type Language = "EN" | "HR" | "DE";
export type GeneratorId = "discovery" | "business" | "tech" | "interview";

export const languageOrder: Language[] = ["EN", "HR", "DE"];
export const defaultLanguage: Language = "HR";

export const translations = {
  EN: {
    header: {
      projectName: "Idea & MVP Generator",
      projectTagline: "AI-powered PRD creation",
    },
    nav: {
      mainLabel: "Main navigation",
      github: "GitHub",
      feedback: "Feedback",
      feedbackAria: "Feedback - opens in a new tab",
      menuToggle: "Toggle menu",
      languageSwitcherLabel: "Change language",
      languageMenuLabel: "Language selection",
    },
    generators: {
      unavailable:
        "Generator is currently unavailable. Visit the GitHub link above for the latest version.",
      card: {
        copyLabel: "Copy generator",
        copiedLabel: "Copied!",
        viewOnGithub: "View on GitHub",
        howToUse: "How to use",
      },
      items: {
        discovery: {
          title: "1. Discovery Generator",
          description: "Evaluate and rank startup ideas through an expanded RICE framework",
          estimatedTime: "20-30 min",
          instructions: [
            "Copy-paste the generator into Claude / ChatGPT",
            "Answer questions P1-P17 and clarify details in the chat",
            "At the end, request the Discovery output (Markdown or docx)",
          ],
        },
        business: {
          title: "2. Business PRD Generator",
          description: "Create a comprehensive Business PRD with MVP scope and ROI estimates",
          estimatedTime: "30-45 min",
          instructions: [
            "Copy-paste the generator into Claude / ChatGPT",
            "Attach the Discovery output document (1_Discovery_Generator.md)",
            "Answer questions P1-P9 and confirm all Business PRD sections",
            "Request the Business PRD output (Markdown / docx / pdf)",
          ],
        },
        tech: {
          title: "3. Tech PRD Generator",
          description: "Generate a Claude Code-ready technical PRD with full architecture",
          estimatedTime: "45-60 min",
          instructions: [
            "Copy-paste the generator into Claude / ChatGPT",
            "Attach the Business PRD output document (2_Business_PRD_Generator.md)",
            "Review all technical sections and confirm architecture, APIs, and plan",
            "Request the Tech PRD output ready for development",
          ],
        },
        interview: {
          title: "4. PRD Interview Assistant",
          description:
            "Structured interview to create a PRD through conversation. Combines Business and Tech PRD generators.",
          estimatedTime: "60-90 min",
          instructions: [
            "Copy-paste the generator into Claude / ChatGPT (or use it as a document in voice mode)",
            "Attach the Discovery output (1_Discovery_Generator.md) so the agent can pull key insights",
            "If Business and Tech PRD documents already exist, attach them so the interview can merge all information",
            "Answer questions in the interview flow and connect responses from the Business + Tech PRD generators",
            "At the end, request the complete PRD package (summary + proposed experiments / scope)",
          ],
        },
      },
    },
    footer: {
      openSourceLabel: "Open source on",
      contactLabel: "Contact:",
      githubLabel: "GitHub",
    },
    meta: {
      title: "AI Generators for PRD Development - Idea & MVP Generator",
      description:
        "Free open-source generators that guide you through a systematic process from idea to Claude Code-ready technical specification. Discovery, Business PRD, Tech PRD, and Interview Assistant.",
    },
  },
  HR: {
    header: {
      projectName: "Idea & MVP Generator",
      projectTagline: "AI podržano kreiranje PRD-a",
    },
    nav: {
      mainLabel: "Glavna navigacija",
      github: "GitHub",
      feedback: "Feedback",
      feedbackAria: "Feedback - otvara se u novoj kartici",
      menuToggle: "Otvori izbornik",
      languageSwitcherLabel: "Promijeni jezik",
      languageMenuLabel: "Izbor jezika",
    },
    generators: {
      unavailable:
        "Generator trenutno nije dostupan. Posjetite GitHub link iznad za najnoviju verziju.",
      card: {
        copyLabel: "Kopiraj generator",
        copiedLabel: "Kopirano!",
        viewOnGithub: "Pogledaj na GitHub-u",
        howToUse: "Kako koristiti",
      },
      items: {
        discovery: {
          title: "1. Discovery generator",
          description: "Evaluirajte i rankirajte startup ideje kroz prošireni RICE framework",
          estimatedTime: "20-30 min",
          instructions: [
            "Copy-paste generator u Claude / ChatGPT",
            "Odgovori na pitanja P1-P17 i kroz chat dogovori dodatne pojašnjavajuće detalje",
            "Na kraju zatraži export Discovery outputa (Markdown ili docx)",
          ],
        },
        business: {
          title: "2. Business PRD generator",
          description: "Kreirajte sveobuhvatan Business PRD s MVP scope i ROI procjenom",
          estimatedTime: "30-45 min",
          instructions: [
            "Copy-paste generator u Claude / ChatGPT",
            "Dodaj kao attachment dokument iz Discovery generatora (1_Discovery_Generator.md)",
            "Odgovori na pitanja P1-P9 i potvrdi sve sekcije Business PRD-a",
            "Zatraži Business PRD output (Markdown / docx / pdf)",
          ],
        },
        tech: {
          title: "3. Tech PRD generator",
          description: "Generirajte Claude Code-ready tehnički PRD s kompletnom arhitekturom",
          estimatedTime: "45-60 min",
          instructions: [
            "Copy-paste generator u Claude / ChatGPT",
            "Dodaj kao attachment dokument iz Business PRD generatora (2_Business_PRD_Generator.md)",
            "Prođi sve tehničke sekcije i potvrdi arhitekturu, API-je i plan",
            "Zatraži Tech PRD output koji je spreman za development",
          ],
        },
        interview: {
          title: "4. PRD Interview assistant",
          description:
            "Strukturirani interview za kreiranje PRD-a kroz razgovor. Kombinacija Business i Tech PRD generatora.",
          estimatedTime: "60-90 min",
          instructions: [
            "Copy-paste generator u Claude / ChatGPT (ili koristi kao dokument u voice modu)",
            "Dodaj Discovery output (1_Discovery_Generator.md) kao attachment kako bi agent povukao ključne uvide",
            "Ako su već kreirani Business i Tech PRD dokumenti, priloži ih kako bi intervju spojio sve informacije",
            "Odgovaraj na pitanja kroz interview flow i poveži odgovore iz Business + Tech PRD generatora",
            "Na kraju zatraži kompletan PRD paket (rezime + predložene eksperimente / scope)",
          ],
        },
      },
    },
    footer: {
      openSourceLabel: "Open source na",
      contactLabel: "Kontakt:",
      githubLabel: "GitHub-u",
    },
    meta: {
      title: "AI Generatori za PRD Development - Idea & MVP Generator",
      description:
        "Besplatni open-source generatori koji vas vode kroz sustavni proces od ideje do Claude Code-ready tehničke specifikacije. Discovery, Business PRD, Tech PRD i Interview Assistant.",
    },
  },
  DE: {
    header: {
      projectName: "Idea & MVP Generator",
      projectTagline: "KI-gestützte PRD-Erstellung",
    },
    nav: {
      mainLabel: "Hauptnavigation",
      github: "GitHub",
      feedback: "Feedback",
      feedbackAria: "Feedback - öffnet sich in einem neuen Tab",
      menuToggle: "Menü umschalten",
      languageSwitcherLabel: "Sprache ändern",
      languageMenuLabel: "Sprachauswahl",
    },
    generators: {
      unavailable:
        "Der Generator ist derzeit nicht verfügbar. Besuche den GitHub-Link oben für die neueste Version.",
      card: {
        copyLabel: "Generator kopieren",
        copiedLabel: "Kopiert!",
        viewOnGithub: "Auf GitHub ansehen",
        howToUse: "So verwenden",
      },
      items: {
        discovery: {
          title: "1. Discovery-Generator",
          description: "Bewerte und priorisiere Startup-Ideen mit einem erweiterten RICE-Framework",
          estimatedTime: "20-30 min",
          instructions: [
            "Generator in Claude / ChatGPT einfügen",
            "Beantworte die Fragen P1-P17 und kläre Details im Chat",
            "Am Ende den Discovery-Output anfordern (Markdown oder docx)",
          ],
        },
        business: {
          title: "2. Business-PRD-Generator",
          description: "Erstelle ein umfassendes Business-PRD mit MVP-Umfang und ROI-Schätzung",
          estimatedTime: "30-45 min",
          instructions: [
            "Generator in Claude / ChatGPT einfügen",
            "Discovery-Output-Dokument anhängen (1_Discovery_Generator.md)",
            "Fragen P1-P9 beantworten und alle Business-PRD-Sektionen bestätigen",
            "Business-PRD-Output anfordern (Markdown / docx / pdf)",
          ],
        },
        tech: {
          title: "3. Tech-PRD-Generator",
          description: "Erstelle ein Claude-Code-fertiges technisches PRD mit kompletter Architektur",
          estimatedTime: "45-60 min",
          instructions: [
            "Generator in Claude / ChatGPT einfügen",
            "Business-PRD-Output-Dokument anhängen (2_Business_PRD_Generator.md)",
            "Alle technischen Sektionen durchgehen und Architektur, APIs und Plan bestätigen",
            "Tech-PRD-Output anfordern, bereit für die Entwicklung",
          ],
        },
        interview: {
          title: "4. PRD-Interview-Assistent",
          description:
            "Strukturiertes Interview zur PRD-Erstellung im Gespräch. Kombination aus Business- und Tech-PRD-Generator.",
          estimatedTime: "60-90 min",
          instructions: [
            "Generator in Claude / ChatGPT einfügen (oder als Dokument im Voice-Modus nutzen)",
            "Discovery-Output (1_Discovery_Generator.md) anhängen, damit der Agent die wichtigsten Erkenntnisse übernimmt",
            "Wenn Business- und Tech-PRD-Dokumente bereits existieren, diese anhängen, damit das Interview alle Infos zusammenführt",
            "Fragen im Interview-Flow beantworten und Antworten aus Business- und Tech-PRD-Generatoren verbinden",
            "Am Ende das komplette PRD-Paket anfordern (Zusammenfassung + vorgeschlagene Experimente / Scope)",
          ],
        },
      },
    },
    footer: {
      openSourceLabel: "Open Source auf",
      contactLabel: "Kontakt:",
      githubLabel: "GitHub",
    },
    meta: {
      title: "KI-Generatoren für PRD-Entwicklung - Idea & MVP Generator",
      description:
        "Kostenlose Open-Source-Generatoren, die dich Schritt für Schritt von der Idee zur Claude Code-fähigen technischen Spezifikation führen. Discovery, Business PRD, Tech PRD und Interview Assistant.",
    },
  },
} as const;

export type TranslationStrings = typeof translations[Language];
