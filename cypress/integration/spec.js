it('does not work', () => {
  cy.visit('https://news.bloomberglaw.com/interactive/banking-on-bankruptcy')
  cy.get('banking-on-bankruptcy').shadow().find('#app').contains('Roy Strom')
})