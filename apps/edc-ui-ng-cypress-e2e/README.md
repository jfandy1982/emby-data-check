# edc-ui-ng-cypress-e2e (Cypress E2E Tests)

End-to-end tests for the `edc-ui-ng` Angular frontend using Cypress.

## Purpose

This is a dedicated E2E testing application that validates user interactions and workflows in the Angular UI using Cypress 15.9.

**Why a Separate E2E App?**

- **Testing Isolation:** E2E tests run independently from the main application
- **Nx Convention:** The `-e2e` suffix signals to Nx this is an E2E project type
- **Real Browser Testing:** Tests run in actual browsers (Chrome, Firefox, Edge, Electron)
- **CI/CD Integration:** Can run E2E tests separately in CI pipelines with headless mode
- **Clean Separation:** Keeps test dependencies isolated from production code

**Why Cypress?**

- **Developer Experience:** Excellent debugging with time-travel and snapshots
- **Fast Execution:** Faster than traditional Selenium-based tools
- **Rich API:** Intuitive API for user interactions (clicks, typing, assertions)
- **Visual Testing:** Built-in screenshot and video recording
- **Network Stubbing:** Easy to mock API responses for isolated UI testing

## Technology Stack

- **Cypress 15.9.0** - Modern E2E testing framework
- **TypeScript 5.9.2** - Type-safe test development
- **@nx/cypress** - Nx integration for Cypress

## Running Tests

### Local Development (Interactive Mode)

```bash
# Open Cypress Test Runner (GUI)
nx e2e edc-ui-ng-cypress-e2e

# Run specific test file
nx e2e edc-ui-ng-cypress-e2e --spec=src/e2e/smoke.cy.ts
```

**Interactive Mode Features:**

- Visual test execution
- Time-travel debugging
- Automatic screenshots
- Live reloading

### Headless Mode (CI/CD)

```bash
# Run in headless mode
nx e2e-ci edc-ui-ng-cypress-e2e

# Run all E2E tests in CI
npm run test:all:ci
```

**Note:** The Angular UI (`edc-ui-ng`) must be running for E2E tests to execute. Nx handles starting the dev server automatically.

## Test Structure

```
apps/edc-ui-ng-cypress-e2e/
├── src/
│   ├── e2e/
│   │   └── smoke.cy.ts          # Smoke tests
│   ├── fixtures/                 # Test data files (JSON)
│   └── support/
│       ├── commands.ts           # Custom Cypress commands
│       └── e2e.ts                # Global configuration
├── cypress.config.ts             # Cypress configuration
└── tsconfig.json                 # TypeScript config
```

### Current Tests

**Smoke Test**

- Location: `src/e2e/smoke.cy.ts`
- Purpose: Verify app loads successfully
- Validates: Page loads, "Welcome" text is visible

```typescript
describe('Smoke Test', () => {
  it('should load the app root page', () => {
    cy.visit('/');
    cy.contains('Welcome');
  });
});
```

## Adding New Tests

### 1. Create Test File

Place test files in `src/e2e/` directory with `.cy.ts` suffix:

```bash
# Example structure
src/e2e/
├── smoke.cy.ts              # Basic smoke tests
├── navigation.cy.ts         # Navigation flow tests
├── emby-connection.cy.ts    # Emby connection UI tests
├── media-browser.cy.ts      # Media browsing tests
├── media-validation.cy.ts   # Validation interface tests
└── snapshot-compare.cy.ts   # Snapshot comparison tests
```

### 2. Test Template

```typescript
describe('Feature Name', () => {
  beforeEach(() => {
    // Setup before each test
    cy.visit('/feature-path');
  });

  it('should perform user action', () => {
    // Interact with UI
    cy.get('[data-testid="button"]').click();

    // Assert expected outcome
    cy.contains('Success message').should('be.visible');
  });
});
```

### 3. Naming Conventions

**File Names:**

- Use kebab-case: `feature-name.cy.ts`
- Group related tests in same file
- Place in `src/e2e/` directory

**Test Descriptions:**

- `describe()` - Feature or page: `'Media Browser'`
- `it()` - User action and outcome: `'should display media items when search is performed'`

### 4. Common Test Patterns

**Testing Navigation:**

```typescript
it('should navigate to settings page', () => {
  cy.get('[data-testid="settings-link"]').click();
  cy.url().should('include', '/settings');
  cy.contains('Settings').should('be.visible');
});
```

**Testing Forms:**

```typescript
it('should submit Emby connection form', () => {
  cy.get('[data-testid="server-url"]').type('http://localhost:8096');
  cy.get('[data-testid="api-key"]').type('test-api-key');
  cy.get('[data-testid="submit-button"]').click();

  cy.contains('Connection successful').should('be.visible');
});
```

**Testing Lists/Tables:**

```typescript
it('should display media items in table', () => {
  cy.get('[data-testid="media-table"]').find('tr').should('have.length.greaterThan', 0);
});
```

**Testing API Mocking:**

```typescript
it('should display error when API fails', () => {
  cy.intercept('GET', '/api/media', {
    statusCode: 500,
    body: { error: 'Server error' },
  }).as('getMedia');

  cy.visit('/media');
  cy.wait('@getMedia');

  cy.contains('Failed to load media').should('be.visible');
});
```

## Custom Commands

Define reusable commands in `src/support/commands.ts`:

```typescript
// Example custom command
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('/login');
  cy.get('[data-testid="username"]').type(username);
  cy.get('[data-testid="password"]').type(password);
  cy.get('[data-testid="submit"]').click();
});

// Usage in tests
cy.login('admin', 'password123');
```

**TypeScript Support:**
Add type definitions for custom commands in `support/commands.ts`:

```typescript
declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>;
    }
  }
}
```

## Fixtures

Store test data in `src/fixtures/` as JSON files:

```bash
src/fixtures/
├── media-items.json      # Sample media data
├── emby-config.json      # Emby configuration
└── snapshots.json        # Snapshot data
```

**Usage:**

```typescript
cy.fixture('media-items.json').then((mediaItems) => {
  cy.intercept('GET', '/api/media', { body: mediaItems });
});
```

## Best Practices

**Use `data-testid` Attributes:**

- Add `data-testid` to Angular components for stable selectors
- Avoid CSS classes or complex selectors that may change
- Example: `<button data-testid="submit-button">Submit</button>`

**Wait for Elements:**

```typescript
// Good: Cypress automatically waits
cy.get('[data-testid="button"]').should('be.visible').click();

// Avoid: Manual waits (Cypress handles this)
// cy.wait(1000);
```

**Chain Assertions:**

```typescript
cy.get('[data-testid="message"]').should('be.visible').and('contain', 'Success').and('have.class', 'success-message');
```

**Clean Test Data:**

```typescript
afterEach(() => {
  // Clean up test data if needed
  cy.clearLocalStorage();
  cy.clearCookies();
});
```

**Test Isolation:**

- Each test should be independent
- Don't rely on previous test state
- Use `beforeEach()` to set up clean state

## Cypress vs. Cucumber

**When to Use Cypress (This App):**

- ✅ Developer-focused testing
- ✅ Technical test scenarios
- ✅ Fast feedback during development
- ✅ Detailed debugging needed
- ✅ API mocking and network stubbing

**When to Use Cucumber (`edc-ui-ng-cucumber-e2e`):**

- ✅ Behavior-driven development (BDD)
- ✅ Business-readable test scenarios
- ✅ Collaboration with non-technical stakeholders
- ✅ Living documentation
- ✅ Acceptance criteria validation

**Recommendation:**

- Use **Cypress** for most technical E2E testing
- Use **Cucumber** for high-level business scenarios and acceptance tests
- Both can coexist - choose based on audience and purpose

## Configuration

**Cypress Configuration:**

- Location: `cypress.config.ts`
- Base URL configured to Angular dev server
- Viewport size, video recording, screenshot settings

**Environment Variables:**

- Configure in `cypress.config.ts` or `cypress.env.json`
- Access in tests: `Cypress.env('variableName')`

## Debugging

**Cypress Test Runner:**

- Time-travel through test execution
- View DOM snapshots at each step
- Inspect network requests
- View console logs

**Debug Commands:**

```typescript
cy.debug(); // Pause test execution
cy.pause(); // Interactive pause
cy.log('Message'); // Log to command log
```

## CI/CD Integration

**GitHub Actions / CI Pipelines:**

```bash
# Run in headless mode with video recording
nx e2e-ci edc-ui-ng-cypress-e2e

# Videos and screenshots saved to:
# - dist/cypress/apps/edc-ui-ng-cypress-e2e/videos/
# - dist/cypress/apps/edc-ui-ng-cypress-e2e/screenshots/
```

## Related Documentation

- **UI Application:** See `apps/edc-ui-ng/README.md` for Angular UI details
- **Cucumber E2E:** See `apps/edc-ui-ng-cucumber-e2e/README.md` for BDD approach
- **Workspace:** See root `CLAUDE.md` for workspace-level commands
- **Cypress Docs:** https://docs.cypress.io/
