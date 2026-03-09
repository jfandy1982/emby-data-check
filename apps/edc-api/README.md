# edc-api (NestJS Backend)

Backend API for the Emby Data Check tool.

## Purpose

The `edc-api` application serves as the backend for the Emby Data Check tool. It provides:

- **Emby Server Integration:** API endpoints to interact with the Emby Media Server
- **Data Validation:** Logic to validate media metadata, especially handling German special characters (Umlaute)
- **Snapshot Comparison:** Compare current media item tags and watch states against snapshots
- **Migration Support:** Ensure data consistency during migrations across Emby instances

This backend acts as the bridge between the Angular frontend and the Emby Media Server, implementing business logic for validation and comparison operations.

## Technology Stack

- **NestJS 11.0.0** - TypeScript-based Node.js framework
- **Express** - HTTP server platform (via `@nestjs/platform-express`)
- **Axios 1.6.0** - HTTP client for external API calls (Emby Server)
- **TypeScript 5.9.2** - Type-safe development
- **Jest** - Testing framework

## Local Development

### Prerequisites

- `.env` file configured in the repository root (copy from `.env.sample`)
- No other service needs to be running — the API is the base layer

### Start the API Server

```bash
# From repository root
npm run stack:api
```

The API will be available at `http://localhost:${API_PORT:-3000}/api`

### Environment Variables

Configure the API via `.env` file in the repository root. Use `.env.sample` as a template.

**Default Configuration:**

- Port: `3000` (configurable via `API_PORT` environment variable)
- Global API prefix: `/api`

## API Endpoints

### Current Endpoints

**GET /api**

- **Description:** Health check endpoint
- **Response:** `{ message: 'Hello API!' }`
- **Example:** `curl http://localhost:3000/api`

### Future Endpoints (Planned)

The following endpoints are planned for implementation:

TBD

## Architecture

The application follows NestJS best practices with a modular architecture:

### Structure

```
apps/edc-api/src/
├── main.ts              # Application bootstrap
└── app/
    ├── app.module.ts    # Root module
    ├── app.controller.ts # HTTP endpoints
    ├── app.service.ts   # Business logic
    └── *.spec.ts        # Unit tests
```

### Design Patterns

- **Controllers:** Handle HTTP requests, delegating to services
- **Services:** Implement business logic, data access
- **Modules:** Organize features into cohesive units
- **Dependency Injection:** NestJS built-in DI container

### Adding New Features

1. Create feature module: `nx g @nx/nest:module features/[feature-name]`
2. Add controller: `nx g @nx/nest:controller features/[feature-name]`
3. Add service: `nx g @nx/nest:service features/[feature-name]`
4. Register module in `app.module.ts`

## Testing

### Unit Tests

Unit tests are colocated with source files using the `.spec.ts` suffix.

**Run unit tests:**

```bash
# Test only this app
nx test edc-api

# Test with coverage
nx test edc-api --coverage
```

### E2E Tests

End-to-end tests are located in `apps/edc-api-e2e`.

**Run E2E tests:**

```bash
# E2E tests for this app
nx e2e edc-api-e2e
```

**E2E Test Location:**

- `apps/edc-api-e2e/src/edc-api/edc-api.spec.ts`

### Testing Strategy

- **Unit Tests:** Test individual components (controllers, services)
- **E2E Tests:** Test HTTP endpoints with actual HTTP requests
- **Coverage:** Run `nx test edc-api --coverage` for per-app coverage

## Development Notes

**Current Status:**

- ⚠️ This is a minimal backend setup (see note in `main.ts`)
- Basic scaffolding in place
- Ready for feature implementation

**Next Steps:**

TBD

**App Creation Command:**

```bash
nx g @nx/nest:application --directory=apps/edc-api --linter=eslint --name=edc-api --strict=true --tags="type:app, domain:api" --unitTestRunner=jest --e2eTestRunner=jest --useProjectJson=true
```

## Related Documentation

- **Overview:** See root [README.md](../../README.md) for quick start and environment variables
- **Workspace:** See root [CLAUDE.md](../../CLAUDE.md) for workspace-level commands
- **Frontend:** See [apps/edc-ui-ng/README.md](../edc-ui-ng/README.md) for Angular UI
- **Nx Guidelines:** See root [AGENTS.md](../../AGENTS.md) for Nx-specific workflows
