describe('Header Component', () => {
  beforeEach(() => {
    const appHost = Cypress.env('APP_HOST') || 'http://localhost:3000';
    cy.visit(`${appHost}/`);
  });

  it('should navigate to each link', () => {
    cy.get('a').contains('Home').click();
    cy.url().should('include', '/');

    cy.get('a').contains('Timeline').click();
    cy.url().should('include', '/timeline');

    cy.get('a').contains('Bank card').click();
    cy.url().should('include', '/bank-card');

    cy.get('a').contains('Contacts').click();
    cy.url().should('include', '/contacts');
  });

  it('should toggle theme', () => {
    cy.get('body').then(($body) => {
      const initialThemeClass = $body.hasClass('dark-theme')
        ? 'dark-theme'
        : 'light-theme';

      cy.get('img[alt="switch"]').click();
      cy.get('body').should('not.have.class', initialThemeClass);
    });
  });
});
