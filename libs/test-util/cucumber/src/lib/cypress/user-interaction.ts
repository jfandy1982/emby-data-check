import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

export function registerUserInteraction(): void {
  When('the user clicks on {string}', (clickableText: string) => {
    cy.contains(clickableText).click();
  });

  When('the user clicks on button {string}', (clickableText: string) => {
    cy.get(`button`).contains(clickableText).parent().click();
  });

  Then('the user sees {string}', (visibleText: string) => {
    cy.contains(visibleText).should('be.visible');
  });

  Then('the user does not see {string}', (notVisibleText: string) => {
    cy.contains(notVisibleText).should('not.exist');
  });

  Then('the button {string} is enabled', (visibleText: string) => {
    cy.contains(visibleText).should('be.enabled');
  });

  Then('the button {string} is disabled', (visibleText: string) => {
    cy.contains(visibleText).should('be.disabled');
  });
}
