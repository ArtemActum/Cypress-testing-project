describe('Write / Read Data to / from JSON / Text File', () => {
    it('should write data into JSON', () => {
        cy.writeFile('log.json', { name: 'Mike', age: 25 });
    });

    it('should write data to the text file', () => {
        cy.writeFile('log.txt', 'Hello world!');
    });

    it('should read and verify data from JSON', () => {
        cy.readFile('log.json').its('age').should('eq', 25);
    });

    it('should read and verify data from the text file', () => {
        cy.readFile('log.txt').should('eq', 'Hello world!');
    });
});

describe('Content Type', () => {
    it('should read and verify browser document content', () => {
        cy.visit('https://example.com');

        cy.wait(2000);

        cy.document().its('contentType').should('eq', 'text/html');

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    });
});