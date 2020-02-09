context('Main Page - Search by title', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('cy.title() - get the title', () => {
    cy.title().should('include', 'React App')
  });

  it('should display movie cards', function () {
    cy.get('.card-container').should('have.length', 10);
  });

  it('should be able to use search', function () {
    cy.get('.search-field input').type("Harry Potter and the Goblet of Fire");
    cy.get('.search-btn input').click();

    cy.url()
      .should(
        'include',
        '/search?search=Harry%20Potter%20and%20the%20Goblet%20of%20Fire&searchBy=title'
      );
    cy.get('.card-container')
      .should('be.visible')
      .should('have.length', 1);

    cy.get('.card-container')
      .find('span')
      .should(($span) => {
        expect($span).to.have.length(3);
        expect($span.first()).to.contain("Harry Potter and the Goblet of Fire");
        expect($span.last()).to.contain("2005")
      });

    cy.get('.card-container').click();

    cy.url().should('include', '/film/');
    cy.get('.movie-container').should('be.visible');
    cy.get('.title-section').should('be.visible');
    cy.get('.number-block').should('be.visible');
    cy.get('.overview').should('be.visible');
    cy.get('.card-container').should('have.length', 10);

    cy.get('.page-container')
      .find('a')
      .click();

    cy.url().should('eq', 'http://localhost:3000/');
  });
});

context('Main Page - search by genre', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('cy.title() - get the title', () => {
    cy.title().should('include', 'React App')
  });

  it('should dispaly movie cards', () => {
    cy.get('.card-container').should('have.length', 10);
  });

  it('should be able to use search', () => {
    cy.get('label[for="GENRE"]').click();
    cy.get('.search-field input').type('comedy');
    cy.get('.search-btn input').click();

    cy.url()
      .should(
        'include',
        '/search?search=comedy&searchBy=genres'
      );
    cy.get('.card-container').should('be.visible').should('have.length', 10);

    cy.get('.page-container')
      .find('a').click();

    cy.url().should('eq', 'http://localhost:3000/')
  });
  }
);
