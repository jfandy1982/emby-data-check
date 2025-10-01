import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the app', () => {
  cy.visit('/');
});

Then('I should see {string}', (text: string) => {
  cy.contains(text);
});
