describe('BankCard functionality', () => {
  it('Searches for currency and observes changes on the map', () => {
    cy.visit('http://localhost:3000/bank-card');
    cy.get('div').contains('Search currency in the bank').should('be.visible');
    const currencyToSearch = 'Euro';
    cy.get('input[type="text"]').type(currencyToSearch);
    cy.get('div').contains(currencyToSearch).should('be.visible');
  });
});
