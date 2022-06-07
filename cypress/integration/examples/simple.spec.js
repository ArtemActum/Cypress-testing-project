describe('Browser Actions', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 });

        cy.url().should('include', 'index.html');

        cy.log('Before Reload');

        cy.reload();

        cy.log('After Reload');
    });

    it('should click on Travel category', () => {
        cy.get('a').contains('Travel').click();

        // Verify we landed on the right page
        cy.get('h1').contains('Travel');
    });

    it('should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11);
    });
});

describe('Challenge Time! Create more Test Scenarios', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 5000 });

        cy.url().should('include', 'index.html');
    });

    it('should click on Poetry category', () => {
        cy.get('a').contains('Poetry').click();

        // Verify we landed on the right page
        cy.get('h1').contains('Poetry');
    });

    it('should click on "Olio" book image', () => {
        cy.get('[alt="Olio"]').click();
    });

    it('should go back to Poetry page', () => {
        cy.go('back');
    });

    it('should click on "Olio" book link', () => {
        cy.get('a').contains('Olio').click();
    });

    it('should check if the displayed price is correct', () => {
        // cy.get('.price_color').first().should('have.text', '£23.88');
        cy.get('.price_color').contains('£23.88');
    });
});

