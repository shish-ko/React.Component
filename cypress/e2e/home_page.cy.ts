describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('shows loading message', () => {
    cy.contains(/loading.../i);
  });
  it('shows initial images', () => {
    cy.get('img').should((arr) => {
      expect(arr).to.have.length(21);
    });
  });
  it('shows requested images and loading message on request', () => {
    cy.intercept(
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7f186c5d957a329557c371dc86a52bd1&tags=random&safe_search&extras=url_m&format=json&nojsoncallback=1&per_page=20'
    ).as('initialFetch');
    cy.wait('@initialFetch').get('input').type('test');
    cy.get('form').submit();
    cy.contains(/loading/i);
  });
  it('saves input value after visiting other pages', () => {
    cy.get('input').type('test');
    cy.get('form').submit();
    cy.get('[data-testid="link_form"]').click();
    cy.get('[data-testid="link_main"]').click();
    cy.get('input').should('have.value', 'test');
  });
});
