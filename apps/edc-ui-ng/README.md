# edc-ui-ng (Angular Frontend)

User interface for the Emby Data Check tool built with Angular 21.1 and Material Design.

## Purpose

The `edc-ui-ng` application provides the web-based user interface for the Emby Data Check tool. It enables users to:

- **Connect to Emby Server:** Configure and manage Emby Server connection settings
- **Validate Media Metadata:** Review and validate metadata, especially for German content with Umlaute
- **Compare Snapshots:** Visualize differences between current state and snapshots
- **Manage Watch States:** Track and compare watch states across different time points
- **Monitor Validation Results:** View validation reports and identify metadata issues

This frontend communicates with the NestJS backend (`edc-api`) which handles Emby Server integration and business logic.

## Technology Stack

- **Angular 21.1.4** - Modern web framework with signals and standalone components
- **Angular Material 21.1.4** - Material Design component library
- **RxJS 7.8.0** - Reactive programming library
- **TypeScript 5.9.2** - Type-safe development
- **SCSS** - Styling with Sass preprocessor
- **Webpack** - Module bundler
- **Jest** - Unit testing framework
- **Cypress 15.9** - E2E testing framework

## Local Development

### Start the Development Server

```bash
# From repository root
npm run stack:ng
```

The application will be available at `http://localhost:4200`

**Features:**

- Port: `4200`
- Proxied API requests to `http://localhost:3000/api`
- Hot module replacement for instant updates
- Automatic browser refresh on changes

### Development Server Only (Without API)

```bash
# Start UI without starting the API
nx serve edc-ui-ng
```

## Architecture

The application uses Angular's modern standalone components architecture (no NgModules).

### Structure

```
apps/edc-ui-ng/src/
├── main.ts              # Application bootstrap
├── app/
│   ├── app.ts           # Root component (standalone)
│   ├── app.html         # Root template
│   ├── app.scss         # Root styles
│   ├── app.config.ts    # Application providers
│   └── app.routes.ts    # Routing configuration
├── styles.scss          # Global styles
└── assets/              # Static assets
```

### Key Architectural Decisions

**Standalone Components:**

- No NgModules (Angular 14+ architecture)
- Components declare their own dependencies via `imports` array
- Simplified dependency management
- Better tree-shaking and lazy loading

**Reactive Patterns:**

- RxJS for asynchronous operations
- Angular signals for state management (Angular 16+)
- Reactive forms for user input

**Material Design:**

- Consistent UI with Angular Material components
- Theming support for custom branding
- Responsive design patterns

### Adding New Features

**Create a new component:**

```bash
nx g @nx/angular:component features/[component-name] --project=edc-ui-ng --style=scss
```

**Create a new service:**

```bash
nx g @nx/angular:service features/[service-name] --project=edc-ui-ng
```

**Add a route:**

1. Create component for the route
2. Add route to `app.routes.ts`
3. Import necessary modules in the component

## Routes

### Current Routes

The application currently has a basic scaffold with no defined routes.

**Root Path (`/`):**

- Displays: "Emby Data Check (Angular Material UI)"
- Component: `App` (root component)

### Planned Routes

TBD

## Testing

### Unit Tests

Unit tests are colocated with components using the `.spec.ts` suffix.

**Run unit tests:**

```bash
# Test only this app
nx test edc-ui-ng

# Test with coverage
nx test edc-ui-ng --coverage

# Watch mode for development
nx test edc-ui-ng --watch
```

**Testing Framework:**

- Jest with `jest-preset-angular 16.0.0`
- Component testing with TestBed
- Isolated unit tests for services

### E2E Tests

End-to-end tests are located in two separate applications:

**Cypress E2E (`apps/edc-ui-ng-cypress-e2e`):**

```bash
# Run Cypress E2E tests
nx e2e edc-ui-ng-cypress-e2e

# Run in headless mode for CI
nx e2e-ci edc-ui-ng-cypress-e2e
```

**Cucumber BDD E2E (`apps/edc-ui-ng-cucumber-e2e`):**

```bash
# Run Cucumber BDD tests
nx e2e edc-ui-ng-cucumber-e2e
```

**E2E Test Locations:**

- Cypress: `apps/edc-ui-ng-cypress-e2e/src/e2e/smoke.cy.ts`
- Cucumber: `apps/edc-ui-ng-cucumber-e2e/`

### Testing Strategy

- **Unit Tests:** Test component logic, services, and utilities in isolation
- **Cypress E2E:** Test user flows and interactions
- **Cucumber BDD:** Behavior-driven tests with natural language scenarios
- **Coverage:** Merged coverage reports via `npm run coverage:merge`

## Build & Deployment

### Build for Production

```bash
# Build this app for production
nx build edc-ui-ng --configuration=production

# Build output location
dist/apps/edc-ui-ng/
```

**Build Optimizations:**

- Ahead-of-Time (AOT) compilation
- Tree-shaking for smaller bundles
- Minification and uglification
- Source maps (configurable)

### Build Configurations

- **Development:** `nx build edc-ui-ng --configuration=development`
- **Production:** `nx build edc-ui-ng --configuration=production`

## Development Notes

**Current Status:**

- ✅ Basic scaffolding with standalone components
- ✅ Angular Material integrated
- ⚠️ No routes defined yet
- ⚠️ Ready for feature implementation

**Next Steps:**

TBD

**Component Prefix:**

- All components use the prefix `edc-ng-` (e.g., `<edc-ng-root>`)
- Configured in project settings

**App Creation Command:**

```bash
nx g @nx/angular:application --directory=apps/edc-ui-ng --name=edc-ui-ng --backendProject=edc-api --e2eTestRunner=cypress --unitTestRunner=jest --linter=eslint --port=4200 --prefix=edc-ng --style=scss --bundler=webpack --tags="type:app, domain:edc-ui-ng, ui:angular"
```

**E2E Setup:**
The generated e2e app was renamed and copied to support both Cypress and Cucumber approaches. The `-e2e` suffix is important for Nx to detect these as e2e project types.

## Related Documentation

- **Workspace:** See root `CLAUDE.md` for workspace-level commands
- **Backend:** See `apps/edc-api/README.md` for NestJS API
- **Nx Guidelines:** See root `AGENTS.md` for Nx-specific workflows
- **Angular Material:** https://material.angular.io/
