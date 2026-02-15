# GitHub Copilot Instructions

This Nx monorepo contains an Emby Media Server validation tool built with NestJS and Angular 21.1.

## Key Guidelines

**Nx Monorepo:**

- Always use `nx` commands instead of direct tool usage
- Prefer `nx run`, `nx run-many`, or `nx affected` for tasks
- Example: `nx affected --target=test` for testing changed projects

**Technology Stack:**

- Backend: NestJS 11 (`apps/edc-api`)
- Frontend: Angular 21.1 with standalone components (`apps/edc-ui-ng`)
- Node.js 22.21.1 / npm 10.9.4

**Testing:**

- Jest for unit tests (colocated `.spec.ts` files)
- Cypress 15.9 for E2E tests
- Run all tests: `npm run test:all`

**Angular Best Practices:**

- Use standalone components (no NgModules)
- Follow existing patterns in `apps/edc-ui-ng`
- Angular Material for UI components

**Code Quality:**

- ESLint with Sheriff plugin for architecture enforcement
- Prettier for code formatting
- cSpell with German dictionary (`@cspell/dict-de-de`) for spell checking
- Conventional commits format (enforced by commitlint)

**German Language Support:**

- Use German dictionary when spell checking

**Development Commands:**

- Start API: `npm run stack:api` (port 3000)
- Start UI: `npm run stack:ng` (port 4200)
- Run checks: `npm run checks:all:conf:default`

**Detailed Documentation:**
For comprehensive guidance, refer to:

- `CLAUDE.md` - Detailed commands and architecture
- `AGENTS.md` - Nx-specific AI guidelines
- `apps/edc-api/README.md` - Backend details
- `apps/edc-ui-ng/README.md` - Frontend details
