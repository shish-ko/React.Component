describe('The Home Page', () => {
  beforeEach(() => {
    cy.intercept('*tags=random*', { fixture: 'photo_random.json' }).as('initialFetch');
    cy.visit('/');
  });

  it('shows loading message', () => {
    cy.contains(/loading.../i);
  });

  it('shows initial images', () => {
    cy.get('img').should('have.length', 21);
  });

  it('shows requested images and loading message on request', () => {
    cy.wait('@initialFetch').get('input').type('test');
    cy.get('form').submit();
    cy.contains(/loading/i);
  });

  it('saves input value after visiting other pages', () => {
    cy.get('input').type('test{enter}');
    cy.get('[data-testid="link_form"]').click();
    cy.get('[data-testid="link_main"]').click();
    cy.get('input').should('have.value', 'test');
  });

  it('opens modal on card click', () => {
    cy.get('.photo__image').first().click();
    cy.get('.modal').should('exist');
  });

  it('loads 404 page', () => {
    cy.visit('/notexistingpage');
    cy.contains(/oops/i);
  });
});
