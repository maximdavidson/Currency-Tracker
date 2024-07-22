describe('Quotes Component', () => {
  beforeEach(() => {
    const appHost = Cypress.env('APP_HOST') || 'http://localhost:3000';
    cy.visit(`${appHost}/`);
  });

  it('should open modal on card click, select currency, change amount and close modal', () => {
    cy.get('[data-testid="currency-card"]').each(($card) => {
      cy.wrap($card).click();

      cy.get('[data-testid="currency-modal"]').should('be.visible');
      cy.get('[data-testid="currency-select"]').select('USD');
      cy.get('[data-testid="amount-input"]').clear().type('100');
      cy.get('[data-testid="close-button"]').click();
      cy.get('[data-testid="currency-modal"]').should('not.exist');
    });
  });

  it('should close modal when clicking outside of it', () => {
    cy.get('[data-testid="currency-card"]').first().click();
    cy.get('[data-testid="currency-modal"]').should('be.visible');
    cy.get('body').click(0, 0); // Clicks outside the modal
    cy.get('[data-testid="currency-modal"]').should('not.exist');
  });
});
