# AGENTS.md

## Repo Overview
- Next.js App Router project. Pages live in `src/app`.
- UI components in `src/components`; global styles in `src/app/globals.css`.

## Package Manager
- Use npm (lockfile: `package-lock.json`). Do not mix with pnpm/yarn/bun.

## i18n
- Use `src/i18n` (`LanguageProvider`, `LanguageContext`, `translations.ts`).
- Update copy in `src/i18n/translations.ts`.
- Keep `GeneratorId` keys in sync with `src/app/generators/page.tsx` and `src/components/GeneratorCard.tsx`.

## Landing
- `/` redirects to `/generators`. Main content lives in `src/app/generators/page.tsx`.

## Verification
- Run `npm run lint` for lint.
- Run `npm run build` when changing production config or server-side logic.
