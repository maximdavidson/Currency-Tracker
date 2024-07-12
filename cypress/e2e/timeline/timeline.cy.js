describe('Timeline Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/timeline');
  });

  it('should change parameters and check graph rendering', () => {
    cy.get('[data-testid="select-dropdown"]').select('EUR');
    cy.get('[data-testid="change-parameters-button"]').click();
    cy.get('[data-testid="currency-modal"]').should('be.visible');
    cy.get('[data-testid="start-date-input"]').clear().type('2024-10-06');
    cy.get('[data-testid="close-button"]').click();
    cy.get('[data-testid="currency-modal"]').should('not.exist');
    cy.get('[data-testid="graph"]').should('exist');
  });
});
