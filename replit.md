# Classical Music Academy

## Overview
A React + Vite + TypeScript frontend web application for a classical music academy. Uses Tailwind CSS v4, Radix UI components, shadcn/ui, and Wouter for routing.

## Architecture
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (@tailwindcss/vite plugin)
- **UI Components**: Radix UI primitives + shadcn/ui pattern
- **Routing**: Wouter
- **State/Data**: TanStack React Query
- **Forms**: React Hook Form + Zod
- **Animation**: Framer Motion
- **Charts**: Recharts

## Project Structure
```
src/
  App.tsx          - Root application component
  main.tsx         - Entry point
  index.css        - Global styles
  components/      - Reusable UI components
  pages/           - Route-level page components
  hooks/           - Custom React hooks
  lib/             - Utility functions
public/            - Static assets
```

## Development
- Run: `npm run dev` (port 5000)
- Build: `npm run build`
- Type check: `npm run typecheck`

## Deployment
Configured as a static site deployment:
- Build command: `npm run build`
- Public directory: `dist`
