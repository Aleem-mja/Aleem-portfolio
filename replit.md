# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Abdul Aleem Portfolio (`artifacts/portfolio`)
- **Type**: React + Vite web app
- **Preview path**: `/` (served at root)
- **Tech**: React, Framer Motion, Tailwind CSS, glassmorphism design
- **Features**:
  - Hero section with animated AA avatar, floating orbs, gradient text
  - About section with stats cards and language proficiency bars
  - Experience section with timeline layout
  - Projects section with expandable cards
  - Skills section with categorized tag clouds
  - Education section with glass cards
  - Contact section with form + link cards
- **Color palette**: Deep dark purple-blue (#7c3aed primary, #2563eb secondary)
- **Data source**: `src/data/cv.ts` — all CV data centralized here

### API Server (`artifacts/api-server`)
- Express 5 backend at `/api`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
