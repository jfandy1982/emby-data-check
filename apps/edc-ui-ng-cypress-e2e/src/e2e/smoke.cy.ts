describe('Smoke Test', () => {
  it('should load the app root page', () => {
    cy.visit('/');
    cy.contains('Welcome');
  });
});
