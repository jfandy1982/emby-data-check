# edc-ui-ng-cucumber-e2e (Cucumber BDD E2E Tests)

Behavior-driven development (BDD) end-to-end tests for the `edc-ui-ng` Angular frontend using Cucumber and Cypress.

## Purpose

This is a dedicated E2E testing application that validates user workflows using **Gherkin** syntax (Given-When-Then) for business-readable test scenarios.

**Why a Separate E2E App?**

- **Testing Isolation:** E2E tests run independently from the main application
- **Nx Convention:** The `-e2e` suffix signals to Nx this is an E2E project type
- **BDD Approach:** Tests written in natural language (Gherkin) that non-developers can read
- **Living Documentation:** Feature files serve as executable specifications
- **Collaboration:** Bridge between technical and business teams

**Why Cucumber + BDD?**

- **Business-Readable:** Tests written in plain English using Gherkin syntax
- **Executable Specifications:** Feature files define expected behavior
- **Stakeholder Collaboration:** Product owners can read and verify tests
- **Living Documentation:** Always up-to-date specification of features
- **Acceptance Criteria:** Validates user stories directly from requirements

**Cucumber vs. Cypress:**
This app uses **Cucumber with Cypress** underneath. You get the best of both worlds:

- Gherkin syntax for readability
- Cypress execution engine for reliability

## Technology Stack

- **@badeball/cypress-cucumber-preprocessor 24.0.0** - Cucumber integration for Cypress
- **Cypress 15.9.0** - E2E testing framework (execution engine)
- **Gherkin** - Business-readable language for test scenarios
- **TypeScript 5.9.2** - Type-safe step definitions

## Running Tests

### Local Development (Interactive Mode)

```bash
# Open Cypress Test Runner with Cucumber scenarios
nx e2e edc-ui-ng-cucumber-e2e

# Run specific feature file
nx e2e edc-ui-ng-cucumber-e2e --spec=src/e2e/smoke/smoke.feature
```

### Headless Mode (CI/CD)

```bash
# Run in headless mode
nx e2e-ci edc-ui-ng-cucumber-e2e

# Run all E2E tests in CI
npm run test:all:ci
```

**Note:** The Angular UI (`edc-ui-ng`) must be running for E2E tests to execute. Nx handles starting the dev server automatically.

## Test Structure

```
apps/edc-ui-ng-cucumber-e2e/
├── src/
│   ├── e2e/
│   │   └── smoke/
│   │       ├── smoke.feature      # Gherkin feature file
│   │       └── smoke.ts           # Step definitions
│   ├── fixtures/                   # Test data files (JSON)
│   └── support/
│       ├── commands.ts             # Custom Cypress commands
│       └── e2e.ts                  # Global configuration
├── cypress.config.ts               # Cypress + Cucumber config
└── tsconfig.json                   # TypeScript config
```

### Current Tests

**Smoke Test Feature**

- Feature File: `src/e2e/smoke/smoke.feature`
- Step Definitions: `src/e2e/smoke/smoke.ts`
- Purpose: Verify app loads successfully

**Feature File (Gherkin):**

```gherkin
Feature: Smoke Test

  Scenario: App root page loads
    Given I open the app
    Then I should see "Welcome"
```

**Step Definitions (TypeScript):**

```typescript
Given('I open the app', () => {
  cy.visit('/');
});

Then('I should see {string}', (text: string) => {
  cy.contains(text);
});
```

## Writing BDD Tests

### 1. Create Feature File Structure

Organize features by domain/feature area:

```bash
src/e2e/
├── smoke/
│   ├── smoke.feature
│   └── smoke.ts
├── emby-connection/
│   ├── emby-connection.feature
│   └── emby-connection.ts
├── media-browser/
│   ├── media-browser.feature
│   └── media-browser.ts
├── media-validation/
│   ├── media-validation.feature
│   └── media-validation.ts
└── snapshot-comparison/
    ├── snapshot-comparison.feature
    └── snapshot-comparison.ts
```

**Convention:**

- One feature per directory
- Feature file (`.feature`) + step definitions (`.ts`) in same directory
- Directory name matches feature name (kebab-case)

### 2. Write Feature File (Gherkin)

**Template:**

```gherkin
Feature: Feature Name
  As a [role]
  I want to [action]
  So that [benefit]

  Background:
    Given I am logged in
    And I am on the dashboard

  Scenario: Scenario name
    Given [initial context]
    When [action taken]
    Then [expected outcome]
    And [additional assertion]

  Scenario Outline: Scenario with examples
    Given I search for "<query>"
    When I submit the search
    Then I should see results for "<query>"

    Examples:
      | query        |
      | Action Movies|
      | Dokumentation|
```

**Gherkin Keywords:**

- **Feature:** High-level description of functionality
- **Scenario:** Specific test case
- **Given:** Initial context/preconditions
- **When:** Action or event
- **Then:** Expected outcome
- **And/But:** Additional steps
- **Background:** Steps run before each scenario
- **Scenario Outline:** Parameterized scenarios with examples

### 3. Implement Step Definitions

**Template:**

```typescript
import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor';

// Given steps - Setup context
Given('I am on the {string} page', (page: string) => {
  cy.visit(`/${page}`);
});

// When steps - Actions
When('I click the {string} button', (buttonText: string) => {
  cy.contains('button', buttonText).click();
});

// Then steps - Assertions
Then('I should see the {string} heading', (heading: string) => {
  cy.contains('h1', heading).should('be.visible');
});

// Hooks
Before(() => {
  // Run before each scenario
  cy.clearLocalStorage();
});

After(() => {
  // Run after each scenario
  cy.screenshot();
});
```

### 4. Reusable Step Definitions

**Create common steps** in `src/support/step-definitions/common.ts`:

```typescript
// Navigation
Given('I am on the homepage', () => {
  cy.visit('/');
});

// Forms
When('I fill in {string} with {string}', (field: string, value: string) => {
  cy.get(`[data-testid="${field}"]`).type(value);
});

// Assertions
Then('I should see an error message', () => {
  cy.get('[role="alert"]').should('be.visible');
});
```

**Import in feature step definitions:**

```typescript
import '../support/step-definitions/common';
```

## Example: Emby Connection Feature

**Feature File (`src/e2e/emby-connection/emby-connection.feature`):**

```gherkin
Feature: Emby Server Connection
  As a user
  I want to connect to my Emby server
  So that I can validate my media metadata

  Scenario: Successful connection
    Given I am on the connection page
    When I enter the server URL "http://localhost:8096"
    And I enter the API key "test-key-123"
    And I click the "Connect" button
    Then I should see "Connected to Emby Server"
    And I should be redirected to the dashboard

  Scenario: Failed connection with invalid URL
    Given I am on the connection page
    When I enter the server URL "invalid-url"
    And I click the "Connect" button
    Then I should see an error message
    And the error should contain "Invalid server URL"
```

**Step Definitions (`src/e2e/emby-connection/emby-connection.ts`):**

```typescript
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the connection page', () => {
  cy.visit('/connect');
});

When('I enter the server URL {string}', (url: string) => {
  cy.get('[data-testid="server-url"]').type(url);
});

When('I enter the API key {string}', (apiKey: string) => {
  cy.get('[data-testid="api-key"]').type(apiKey);
});

When('I click the {string} button', (buttonText: string) => {
  cy.contains('button', buttonText).click();
});

Then('I should see {string}', (text: string) => {
  cy.contains(text).should('be.visible');
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});

Then('I should see an error message', () => {
  cy.get('[role="alert"]').should('be.visible');
});

Then('the error should contain {string}', (errorText: string) => {
  cy.get('[role="alert"]').should('contain', errorText);
});
```

## Best Practices

### Gherkin Writing

**Use Business Language:**

- ✅ Good: `When I submit the search form`
- ❌ Bad: `When I click the #search-button element`

**Focus on Behavior, Not Implementation:**

- ✅ Good: `Then I should see validation errors`
- ❌ Bad: `Then the .error-message CSS class should be added`

**Keep Scenarios Independent:**

- Each scenario should stand alone
- Don't rely on previous scenario state
- Use `Background` for common setup

**Use Scenario Outlines for Similar Cases:**

```gherkin
Scenario Outline: Invalid email validation
  When I enter email "<email>"
  Then I should see error "<error>"

  Examples:
    | email          | error                    |
    | invalid        | Invalid email format     |
    | @test.com      | Invalid email format     |
    | test@          | Invalid email format     |
```

### Step Definitions

**Reuse Step Definitions:**

- Write generic, reusable steps
- Avoid duplicating similar steps
- Use parameters for flexibility

**Keep Steps Simple:**

- One action per step
- Delegate complex logic to helper functions
- Use Page Object pattern for complex pages

**Use Data Tables:**

```gherkin
Given the following media items exist:
  | Title         | Genre  | Year |
  | Movie A       | Action | 2023 |
  | Movie B       | Drama  | 2022 |
```

```typescript
Given('the following media items exist:', (dataTable) => {
  dataTable.hashes().forEach((row) => {
    cy.createMediaItem(row.Title, row.Genre, row.Year);
  });
});
```

## Cucumber vs. Cypress

**When to Use Cucumber (This App):**

- ✅ Writing acceptance criteria for user stories
- ✅ Collaborating with product owners/stakeholders
- ✅ Creating living documentation
- ✅ High-level business scenarios
- ✅ Non-technical audience needs to read tests

**When to Use Cypress (`edc-ui-ng-cypress-e2e`):**

- ✅ Technical test scenarios
- ✅ Developer-focused testing
- ✅ Detailed debugging needed
- ✅ Fast feedback during development
- ✅ Complex network mocking

**Recommendation:**

- Use **Cucumber** for acceptance tests and user story validation
- Use **Cypress** for detailed technical E2E testing
- Both can coexist - choose based on audience and purpose

## Configuration

**Cucumber Preprocessor Configuration:**

```typescript
// cypress.config.ts
import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );
      return config;
    },
    specPattern: '**/*.feature',
    supportFile: 'src/support/e2e.ts',
  },
});
```

## Debugging

**Cucumber Test Runner:**

- Feature files appear in Cypress Test Runner
- Click on feature to run scenarios
- Time-travel through steps like regular Cypress tests

**Debug Commands:**

```typescript
Then('debug point', () => {
  cy.debug(); // Pause execution
  cy.pause(); // Interactive pause
});
```

## Tags (Advanced)

**Tag scenarios for selective execution:**

```gherkin
@smoke
Scenario: Quick smoke test
  Given I open the app
  Then I should see "Welcome"

@integration
Scenario: Full integration test
  Given I have an Emby server running
  When I connect to the server
  Then I should see my media library
```

**Run specific tags:**

```bash
# Configuration needed in cypress.config.ts
# Example: Run only @smoke tests
TAGS="@smoke" nx e2e edc-ui-ng-cucumber-e2e
```

## CI/CD Integration

**GitHub Actions / CI Pipelines:**

```bash
# Run in headless mode
nx e2e-ci edc-ui-ng-cucumber-e2e

# Generate reports
# - HTML reports: dist/cypress/apps/edc-ui-ng-cucumber-e2e/reports/
# - Videos: dist/cypress/apps/edc-ui-ng-cucumber-e2e/videos/
```

## Related Documentation

- **UI Application:** See `apps/edc-ui-ng/README.md` for Angular UI details
- **Cypress E2E:** See `apps/edc-ui-ng-cypress-e2e/README.md` for Cypress approach
- **Workspace:** See root `CLAUDE.md` for workspace-level commands
- **Cucumber Docs:** https://github.com/badeball/cypress-cucumber-preprocessor
- **Gherkin Reference:** https://cucumber.io/docs/gherkin/reference/
