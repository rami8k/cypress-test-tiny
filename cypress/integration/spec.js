it('does not work', () => {
  cy.visit('index.html')
  cy.get('[data-test=newsletter-signup-checkbox-BUNW_NL]').shadow().find('input').should('be.checked')

})