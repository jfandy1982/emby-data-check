# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Emby Data Check** is an opinionated validation tool for the Emby Media Server. It addresses specific use cases:

- Comparing tags and watch states of media items against snapshots
- Supporting data migrations by ensuring consistency
- Validating metadata for media files with German special characters (Umlaute: ä, ö, ü)

**Technology Stack:**

- **Nx 22.5** - Monorepo management
- **NestJS 11** - Backend framework
- **Angular 21.1** - Frontend framework with standalone components
- **Node.js 22.21.1 / npm 10.9.4** - Runtime requirements

## Architecture

This is an Nx monorepo with the following structure:

**Applications:**

- `apps/edc-api` - NestJS backend (port 3000, API prefix `/api`)
- `apps/edc-ui-ng` - Angular 21.1 frontend (port 4200, Angular Material UI)

**E2E Tests:**

- `apps/edc-api-e2e` - API E2E tests (Jest-based)
- `apps/edc-ui-ng-cypress-e2e` - UI E2E tests (Cypress 15.9)
- `apps/edc-ui-ng-cucumber-e2e` - Alternative BDD tests (Cucumber)

**Key Architectural Decisions:**

- Angular uses standalone components (no NgModules)
- Nx-based monorepo for optimized builds and shared tooling
- Separate E2E test applications for isolation

## Development Commands

### Local Development

```bash
npm run stack:api      # Start NestJS API server on port 3000
npm run stack:ng       # Start Angular UI with proxied API on port 4200
```

### Build & Test

```bash
npm run build:all                # Build all applications
npm run test:all                 # Run all unit tests and E2E tests
npm run test:all:ci              # Run tests with CI-specific E2E targets
npm run lint:all:check           # Check for linting violations in the entire workspace
npm run format:all:check         # Check code formatting with Prettier in the entire workspace
npm run checks:all:conf:default  # Run lint, build, test, e2e in parallel with default configuration
```

### Maintenance

```bash
npm run cleanup:all          # Clean all caches, generated artifacts and reinstall dependencies
npm run spell:check:all      # Check spelling across repository
npm run upgrade:nx:prepare   # Prepare Nx upgrade (interactive)
npm run upgrade:nx:doit      # Install new Nx version and apply Nx migrations, if needed
```

### Nx-Specific Commands

- Always prefer `nx run`, `nx run-many`, or `nx affected` over direct tool usage
- Use `nx affected` for running tasks only on changed projects
- Example: `nx affected --target=test` runs tests only for affected projects

## Nx Workspace Guidelines

This repository follows Nx best practices. See `AGENTS.md` for detailed Nx-specific guidelines including:

- **Task Execution:** Always run tasks through `nx` commands
- **MCP Tools:** Use `nx_workspace`, `nx_project_details`, `nx_docs` tools when available
- **CI Debugging:** Use `nx_cloud_cipe_details` and `nx_cloud_fix_cipe_failure` for pipeline errors
- **Configuration:** Use `nx_docs` tool for up-to-date Nx configuration guidance

## Environment Setup

**Requirements:**

- Node.js 22.21.1 (specified in `package.json` engines)
- npm 10.9.4

**Initial Setup:**

```bash
npm install
```

**Environment Configuration:**
Create a `.env` file in the root directory using `.env.sample` as a template.

## Testing Strategy

**Unit Tests:**

- Jest for both backend and frontend
- Test files colocated with source code (`.spec.ts` suffix)
- Run with `npm run test:all`

**E2E Tests:**

- **API E2E:** Jest-based tests in `apps/edc-api-e2e`
- **UI E2E:** Cypress 15.9-based tests in `apps/edc-ui-ng-cypress-e2e`
- **Alternative:** Cucumber BDD tests in `apps/edc-ui-ng-cucumber-e2e`

**Coverage:**

- Coverage reports merged via `lcov-result-merger`
- Command: `npm run coverage:merge`

## Code Quality

**ESLint:**

- Configuration: `eslint.config.mjs`
- Includes `@softarc/eslint-plugin-sheriff` for architecture enforcement
- Plugin: `eslint-plugin-unused-imports` for import cleanup

**Prettier:**

- Code formatting enforced
- Check with `npm run format:all:check`
- Fix with `npm run format:all`

**cSpell:**

- Spell checker with German dictionary support (`@cspell/dict-de-de`)
- Configuration: `.cspell.json`
- Search for words in dictionaries: `npm run spell:search:dict [word]`

**Git Hooks:**

- **Husky:** Pre-commit hooks for automated quality checks
- **CommitLint:** Enforces conventional commit messages

## Special Considerations

**German Language Support:**

- cSpell configured with German dictionary for accurate spell checking

**Architecture Enforcement:**

- `@softarc/eslint-plugin-sheriff` enforces module boundaries
- Follow existing patterns when adding new features

**Commit Messages:**

- Use conventional commits format (enforced by commitlint)
- Examples: `feat:`, `fix:`, `docs:`, `test:`, `chore:`

## App-Specific Documentation

**Main Applications:**

- **Backend:** See `apps/edc-api/README.md` for NestJS backend details
- **Frontend:** See `apps/edc-ui-ng/README.md` for Angular frontend details

**E2E Test Applications:**

- **API E2E Tests:** See `apps/edc-api-e2e/README.md` for API testing with Jest + Axios
- **UI E2E Tests (Cypress):** See `apps/edc-ui-ng-cypress-e2e/README.md` for Cypress testing approach
- **UI E2E Tests (Cucumber):** See `apps/edc-ui-ng-cucumber-e2e/README.md` for BDD/Gherkin testing approach

## Key File Locations

**Backend Entry Points:**

- `apps/edc-api/src/main.ts` - Application bootstrap
- `apps/edc-api/src/app/app.module.ts` - Main NestJS module
- `apps/edc-api/src/app/app.controller.ts` - HTTP endpoints
- `apps/edc-api/src/app/app.service.ts` - Business logic

**Frontend Entry Points:**

- `apps/edc-ui-ng/src/main.ts` - Angular bootstrap
- `apps/edc-ui-ng/src/app/app.ts` - Root component (standalone)
- `apps/edc-ui-ng/src/app/app.config.ts` - Application providers
- `apps/edc-ui-ng/src/app/app.routes.ts` - Routing configuration

**Configuration Files:**

- `nx.json` - Nx workspace configuration
- `tsconfig.base.json` - Base TypeScript configuration
- `eslint.config.mjs` - ESLint rules
- `.cspell.json` - Spell checker configuration
- `.env` - Environment variables (create from `.env.sample`)
