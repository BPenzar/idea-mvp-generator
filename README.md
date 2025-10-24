# 🚀 Idea & MVP Generator

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC)](https://tailwindcss.com/)

> **Od ideje do Claude Code implementacije za 1-2 sata umjesto mjeseci planiranja**

Dual-phase web platforma koja omogućuje korisnicima da kroz sistematičan proces prođu od nejasne ideje do Claude Code-ready tehničkog PRD-a. Uštedi 20-50 sati razvoja kroz provjeren framework za product development.

## ✨ Značajke

### 🔍 **Discovery Generator**
- Strukturirani upitnik s 15 ključnih pitanja
- AI evaluacija ideja kroz prošireni RICE+ framework
- Objektivno rangiranje s scoring tablicom
- Preporuke za sljedeće korake

### 📋 **Business PRD Generator**
- Sveobuhvatan Business Product Requirements Document
- MVP scope definition i feature prioritization
- ROI procjena i Go/Refine/Hold preporuke
- Target user personas i competitive analiza

### ⚡ **Tech PRD Generator**
- Claude Code optimiziran tehnički PRD
- Kompleta arhitektura i database schema
- API design s request/response primjerima
- File structure i implementation plan
- **80%+ funkcionalnosti bez dodatnih pitanja u Claude Code-u**

### 💬 **PRD Interview Assistant**
- Vođeni razgovor umjesto dugačkih formi
- Prirodan interview flow kroz sve faze
- Automatska sinteza u kompletan PRD
- 60-90 minuta do finalnog dokumenta

## 🎯 Za koga je ovo napravljeno?

- **Solo tech entrepreneurs** koji trebaju strukturu za svoje ideje
- **Product manageri** koji žele standardiziran approach
- **Indie hackeri** koji rade na side projectima
- **Small development teams** (2-5 ljudi)
- **Tech consulting agencije** za client discovery

## 🚀 Brzi početak

### Opcija 1: Koristi generatore (preporučeno)

1. **Otvori [Generators page](https://idea-mvp-generator.vercel.app/generators)**
2. **Copy-paste** bilo koji generator u Claude ili ChatGPT
3. **Odgovori** na pitanja korak po korak
4. **Dobij** strukturiran PRD za svoj projekt

### Opcija 2: Pokreni lokalno

```bash
# Clone repository
git clone https://github.com/BPenzar/idea-mvp-generator.git
cd idea-mvp-generator

# Install dependencies
npm install

# Run development server
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000) u browseru.

## 📁 Struktura projekta

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Landing page
│   │   └── generators/        # Generators showcase
│   ├── components/            # React komponente
│   │   ├── ui/               # shadcn/ui komponente
│   │   ├── Hero.tsx          # Hero sekcija
│   │   ├── HowItWorks.tsx    # Process objašnjenje
│   │   ├── GeneratorCard.tsx # Generator display
│   │   └── CopyButton.tsx    # Copy-paste funkcionalnost
│   └── lib/
├── public/
│   ├── generators/           # .md generatori
│   │   ├── 1_Discovery_Generator.md
│   │   ├── 2_Business_PRD_Generator.md
│   │   ├── 3_Tech_PRD_Generator.md
│   │   └── 4_PRD_Interview.md
│   └── examples/            # Example PRD outputi
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **TypeScript**: Full type safety
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 📖 Kako koristiti generatore

### 1. Discovery Generator
```markdown
Kopiraj generator → Paste u Claude/ChatGPT → Odgovori na 15 pitanja →
Dobij evaluaciju ideja s RICE+ scoring → Odaberi najbolju ideju
```

### 2. Business PRD Generator
```markdown
Uzmi odabranu ideju → Copy Business PRD Generator →
Odgovori na business pitanja → Dobij kompletan Business PRD
```

### 3. Tech PRD Generator
```markdown
Uzmi Business PRD → Copy Tech PRD Generator →
Odgovori na tehničke specifikacije → Dobij Claude Code-ready Tech PRD
```

### 4. Implementacija u Claude Code
```markdown
Copy Tech PRD → Paste u Claude Code →
"Implement this Tech PRD" → Dobij funkcionalan MVP
```

## 🔥 Success Stories

> **"Uštedio sam 3 tjedna planiranja. Tech PRD je bio toliko detaljan da je Claude Code napravio 90% funkcionalnosti bez dodatnih pitanja."**
> *- Marko P., Full-stack Developer*

> **"Koristio sam Discovery Generator za 5 različitih ideja. Objektivan scoring mi je pomogao odabrati pravu ideju umjesto oslanjanja na gut feeling."**
> *- Ana M., Product Manager*

## 🤝 Doprinosi

Doprinos je dobrodošao! Kako možeš pomoći:

1. **Fork** repository
2. **Create** feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** promjene (`git commit -m 'Add amazing feature'`)
4. **Push** na branch (`git push origin feature/amazing-feature`)
5. **Open** Pull Request

### Ideje za doprinose:

- 🌍 Prijevodi na druge jezike
- 📝 Novi generator templates
- 🎨 UI/UX poboljšanja
- 🧪 Dodavanje testova
- 📚 Dokumentacija i examples

## 📄 Licenca

Ovaj projekt je licenciran pod [MIT License](LICENSE).

## 👨‍💻 Autor

**BSP Lab • Bruno Penzar**
- 📧 Email: [penzar.bruno@gmail.com](mailto:penzar.bruno@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/bruno-penzar](https://linkedin.com/in/bruno-penzar)
- 🐦 Twitter: [@Brunopenzar](https://x.com/Brunopenzar)
- 💻 GitHub: [github.com/BPenzar](https://github.com/BPenzar)

## ⭐ Podrška

Ako ti je ovaj projekt pomogao, molimo te da mu daš **star** ⭐ na GitHub-u!

---

**🎯 Rezultat**: Od nejasne ideje do Claude Code implementacije za 1-2 sata

[**💻 Live Demo**](https://idea-mvp-generator.vercel.app) | [**📚 Documentation**](https://github.com/BPenzar/idea-mvp-generator/wiki) | [**🐛 Report Bug**](https://github.com/BPenzar/idea-mvp-generator/issues)
