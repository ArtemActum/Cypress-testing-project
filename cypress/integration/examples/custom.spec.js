describe('Custom Commands', () => {
    it('should login to application using custom Cypress command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');

        cy.login('username', 'password');
    });
});