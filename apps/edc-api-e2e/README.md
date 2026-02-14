# edc-api-e2e (API E2E Tests)

End-to-end tests for the `edc-api` NestJS backend application.

## Purpose

This is a dedicated E2E testing application that validates the API endpoints of `edc-api` through actual HTTP requests.

**Why a Separate E2E App?**

- **Testing Isolation:** E2E tests run independently from the main application
- **Nx Convention:** The `-e2e` suffix signals to Nx this is an E2E project type
- **Real HTTP Testing:** Tests use actual HTTP clients (Axios) instead of mocking
- **CI/CD Integration:** Can run E2E tests separately in CI pipelines
- **Clean Separation:** Keeps test dependencies isolated from production code

## Technology Stack

- **Jest** - Testing framework
- **Axios** - HTTP client for API requests
- **TypeScript 5.9.2** - Type-safe test development

## Running Tests

### Local Development

```bash
# Run E2E tests
nx e2e edc-api-e2e

# Run in watch mode
nx e2e edc-api-e2e --watch

# Run with coverage
nx e2e edc-api-e2e --coverage
```

### CI/CD

```bash
# Run E2E tests optimized for CI
nx e2e-ci edc-api-e2e
```

**Note:** The API server (`edc-api`) must be running for E2E tests to execute. Jest's global setup/teardown handles starting and stopping the server automatically.

## Test Structure

```
apps/edc-api-e2e/src/
├── edc-api/
│   └── edc-api.spec.ts        # API endpoint tests
└── support/
    ├── global-setup.ts         # Start API server before tests
    ├── global-teardown.ts      # Stop API server after tests
    └── test-setup.ts           # Per-test setup
```

### Current Tests

**GET /api - Health Check**

- Location: `src/edc-api/edc-api.spec.ts`
- Validates: Status 200, response message
- Example:
  ```typescript
  describe('GET /api', () => {
    it('should return a message', async () => {
      const res = await axios.get(`/api`);
      expect(res.status).toBe(200);
      expect(res.data).toEqual({ message: 'Hello API!' });
    });
  });
  ```

## Adding New Tests

### 1. Create Test File

Place test files in `src/edc-api/` directory with `.spec.ts` suffix:

```bash
# Example structure
src/edc-api/
├── edc-api.spec.ts           # General API tests
├── emby-endpoints.spec.ts    # Emby-related endpoint tests
├── media-validation.spec.ts  # Media validation tests
└── snapshots.spec.ts         # Snapshot comparison tests
```

### 2. Test Template

```typescript
import axios from 'axios';

describe('Feature Name', () => {
  it('should do something', async () => {
    expect.hasAssertions(); // Ensures at least one assertion runs

    const res = await axios.get('/api/endpoint');

    expect(res.status).toBe(200);
    expect(res.data).toEqual({
      /* expected data */
    });
  });
});
```

### 3. Naming Conventions

**File Names:**

- Use kebab-case: `feature-name.spec.ts`
- Group related tests in same file
- Place in `src/edc-api/` directory

**Test Descriptions:**

- `describe()` - HTTP method + endpoint: `'GET /api/media/:id'`
- `it()` - Expected behavior: `'should return media metadata'`

### 4. Common Patterns

**Testing Different HTTP Methods:**

```typescript
describe('POST /api/snapshots', () => {
  it('should create a new snapshot', async () => {
    const res = await axios.post('/api/snapshots', {
      name: 'Test Snapshot',
      timestamp: new Date().toISOString(),
    });
    expect(res.status).toBe(201);
  });
});
```

**Testing Error Responses:**

```typescript
it('should return 404 for non-existent resource', async () => {
  try {
    await axios.get('/api/media/999999');
  } catch (error) {
    expect(error.response.status).toBe(404);
  }
});
```

**Using Query Parameters:**

```typescript
it('should filter results by query params', async () => {
  const res = await axios.get('/api/media', {
    params: { genre: 'Action', year: 2023 },
  });
  expect(res.data.items).toBeInstanceOf(Array);
});
```

## Test Organization

**Organize tests by feature domain:**

```
src/edc-api/
├── edc-api.spec.ts              # General/health check
├── emby-connection.spec.ts       # Emby server connection tests
├── media-validation.spec.ts      # Media metadata validation
├── snapshot-management.spec.ts   # Snapshot CRUD operations
└── snapshot-comparison.spec.ts   # Snapshot comparison logic
```

## Best Practices

**Always use `expect.hasAssertions()`:**

- Ensures async tests don't pass when they shouldn't
- Catches cases where assertions don't run due to errors

**Test HTTP Status Codes:**

- Always verify the status code first
- Then validate response data

**Use Descriptive Test Names:**

- Good: `'should return 404 when media ID does not exist'`
- Bad: `'media test'`

**Clean Up Test Data:**

- Delete test data after tests complete
- Use `afterEach()` or `afterAll()` hooks if needed

**Test Edge Cases:**

- Invalid input data
- Missing required fields
- Unauthorized access
- Large data sets

## Configuration

**Jest Configuration:**

- Location: `jest.config.ts`
- Global setup/teardown configured to manage API server lifecycle
- Base URL configured for Axios requests

**TypeScript Configuration:**

- Extends workspace base configuration
- Test-specific compiler options

## CI/CD Integration

The `e2e-ci` target is optimized for continuous integration:

- Runs in headless mode
- Generates JUnit XML reports
- Faster execution with CI-specific settings

**Example CI command:**

```bash
npm run test:all:ci  # Runs all tests including e2e-ci targets
```

## Related Documentation

- **API Application:** See `apps/edc-api/README.md` for API implementation details
- **Workspace:** See root `CLAUDE.md` for workspace-level commands
- **Nx Guidelines:** See root `AGENTS.md` for Nx-specific workflows
