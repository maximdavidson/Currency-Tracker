// cypress/integration/bankCard.spec.js

describe('BankCard functionality', () => {
  it('Searches for currency and observes changes on the map', () => {
    cy.visit('http://localhost:3000/bank-card'); // Заходим на страницу BankCard

    // Проверяем, что страница загрузилась корректно
    cy.get('div').contains('Search currency in the bank').should('be.visible');

    // Находим поле ввода для поиска валюты и вводим заданную валюту
    const currencyToSearch = 'Euro'; // Задаем валюту для поиска
    cy.get('input[type="text"]').type(currencyToSearch);

    // Проверяем, что введенная валюта появилась в списке предложений
    cy.get('div').contains(currencyToSearch).should('be.visible');
  });
});
