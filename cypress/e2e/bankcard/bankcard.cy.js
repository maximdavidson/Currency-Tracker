describe('BankCard functionality', () => {
  it('Searches for currency and observes changes on the map', () => {
    const appHost = Cypress.env('APP_HOST') || 'http://localhost:3000';
    cy.visit(`${appHost}/bank-card`);
    cy.get('div').contains('Search currency in the bank').should('be.visible');
    const currencyToSearch = 'Euro';
    cy.get('input[type="text"]').type(currencyToSearch);
    cy.get('div').contains(currencyToSearch).should('be.visible');
  });
});
