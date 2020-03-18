/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    const url = Cypress.env('url');
    cy.log('The url is', url);
    console.log('The url is', url)
    cy.visit(url)
  })


  it('first test', () => {
    cy.get('[data-testid=place-order-button]').click();
    cy.get(':nth-child(1) > [data-testid=order-number]').contains('1');
  })
})
