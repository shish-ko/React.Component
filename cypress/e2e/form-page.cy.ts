import { TEST_NAME, TEST_ADDRESS } from '../../src/data/test-data';

const pngFile = new File([new Blob()], 'fakeImage', { type: 'image/png' });

const createAcc = () => {
  cy.get('#name').type(TEST_NAME);
  cy.get('#address').type(TEST_ADDRESS);
  cy.get('#birthDate').type('1111-11-11');
  cy.get('#shippingMethod').select('DHL');
  cy.get('#Mr').check();
  cy.get('#img').selectFile({
    contents: Cypress.Buffer.from('file contents'),
    fileName: 'file.png',
    mimeType: 'image/png',
    lastModified: Date.now(),
  });
  cy.get('#agreement').check();
  cy.get('button').first().click();
};

describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('shows error messages on empty form submit', () => {
    cy.get('form').submit();
    cy.get('label.form__error-label').each((el) => cy.wrap(el).should('not.be.empty'));
  });
  it('does not show error messages on filled form submit', () => {
    createAcc();
    cy.get('label.form__error-label').each((el) => cy.wrap(el).should('be.empty'));
  });
  it('creates accounts on right inputs and deletes it', () => {
    createAcc();
    cy.get('.pop-up').should('have.class', 'pop-up_active');
    cy.contains(/User shipping accounts/i);
    createAcc();
    cy.get('.acc').should('have.length', 2).first().click().should('have.class', 'acc_active');

    cy.get('.acc__delete-btn').first().click();
    cy.get('.acc').should('have.length', 1);
  });
});
