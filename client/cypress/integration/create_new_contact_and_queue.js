describe('Contacts', () => {
  const contactName = 'test name';
  const contactNote = 'test note';
  const contactUpdate = ' updated';

  beforeEach(() => {
    cy.visit('/');
  });

  it('should create a contact, edit it and then delete it', () => {
    cy.get('[data-testid="go-to-contacts-button"]').click();
    cy.get(
      '[data-testid="add-new-contact-button"]',
    ).click();
    cy.get(
      '[data-testid="new-contact-close-button"]',
    ).click();
    cy.get(
      '[data-testid="add-new-contact-button"]',
    ).click();
    cy.get('[data-testid="new-contact-name"]').type(
      contactName,
    );
    cy.get('[data-testid="new-note-name"]').type(
      contactNote,
    );
    cy.get(
      '[data-testid="new-contact-add-button"]',
    ).click();
    cy.contains(contactName);
    cy.contains(contactNote);
    cy.get('[data-testid="edit-contact-button"]').click();
    cy.get('[data-testid="edit-contact-name"]').type(
      contactUpdate,
    );
    cy.get('[data-testid="edit-contact-note"]').type(
      contactUpdate,
    );
    cy.get(
      '[data-testid="edit-contact-save-button"]',
    ).click();
    cy.get('[data-testid="delete-contact-button"]').click();
  });

  it('should add contact to queue and delete it', () => {
    cy.get('[data-testid="go-to-contacts-button"]').click();
    cy.get(
      '[data-testid="add-new-contact-button"]',
    ).click();
    cy.get(
      '[data-testid="new-contact-close-button"]',
    ).click();
    cy.get(
      '[data-testid="add-new-contact-button"]',
    ).click();
    cy.get('[data-testid="new-contact-name"]').type(
      contactName,
    );
    cy.get('[data-testid="new-note-name"]').type(
      contactNote,
    );
    cy.get(
      '[data-testid="new-contact-add-button"]',
    ).click();
    cy.contains(contactName);
    cy.contains(contactNote);

    cy.get('[data-testid="add-to-queue-button"]').click();
    cy.get('[data-testid="go-to-home-button"]').click();
    cy.contains(contactName);
    cy.get(
      '[data-testid="delete-queue-contact-button"]',
    ).click();
  });
});
