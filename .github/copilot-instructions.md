# Copilot instructions (LVBL1)

## Project snapshot
- Vite + React + TypeScript (SWC). Entry: `src/main.tsx` → `src/App.tsx`.
- Routing: `react-router-dom` (`BrowserRouter` + `Routes` in `src/App.tsx`).
- UI: shadcn/ui components in `src/components/ui/*` built on Radix; variants via CVA.
- Styling: Tailwind + CSS variables (`src/index.css`, `tailwind.config.ts`, `components.json`).
- Client state: `@tanstack/react-query` provider is initialized in `src/App.tsx`.

## Repo conventions that matter
- Prefer `@/...` imports (alias to `src/`) — configured in `vite.config.ts`, `tsconfig.app.json`, `vitest.config.ts`.
- Use `cn()` from `src/lib/utils.ts` for `className` composition (clsx + tailwind-merge).
- shadcn component pattern: prefer prop-driven variants over ad-hoc classes.
  - Example: `Button` supports `variant` (`hero`, `hero-outline`, `glow`, …) and `size` (`xl`, …) in `src/components/ui/button.tsx`.
- Tailwind base stylesheet rule: keep any `@import …` before `@tailwind …` directives in `src/index.css` (Vite CSS import-order requirement).
- Animation tuning: when overriding animation duration, prefer explicit arbitrary properties like `[animation-duration:30s]` (see `src/components/InfiniteLogoCarousel.tsx`).

## Where to make changes
- Route-level pages live in `src/pages/*`.
  - Add new routes in `src/App.tsx` **above** the catch-all `path="*"` route.
- Landing-page sections/components live in `src/components/*` (assembled by `src/pages/Index.tsx`).
- Reusable primitives (dialogs, dropdowns, forms, etc.) live in `src/components/ui/*`.

## Local workflows (use these commands)
- Dev server: `npm run dev` (Vite serves on port `8080`; HMR overlay disabled in `vite.config.ts`).
- Production build: `npm run build` (use `npm run preview` to serve `dist/`).
- Tests: `npm test` / `npm run test:watch` (Vitest + jsdom; setup in `src/test/setup.ts`; tests match `src/**/*.{test,spec}.{ts,tsx}`).
- Lint: `npm run lint` (ESLint flat config in `eslint.config.js`; `dist/` ignored).

## Notes on external tooling
- `lovable-tagger` runs only in development mode (see `vite.config.ts`). Don’t rely on it for production behavior.
