describe('Form page', () => {
  it('shows error messages on submit', () => {
    cy.visit('/form');
    cy.get('form').submit();
    cy.get('label.form__error-label').should((arr) => expect(arr).to.have.length(7));
  });
  it('shows error messages on submit', () => {
    cy.visit('/form');
    cy.get('form').submit();
    cy.get('label.form__error-label').should((arr) => expect(arr).to.have.length(7));
  });
});
