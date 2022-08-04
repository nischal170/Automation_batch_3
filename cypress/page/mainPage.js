class mainPage{
    username()
    {
        cy.get('input[name="username"]').type('Cypress')
    }
    password()
    {
        cy.get('input[name="password"]').type('123@admin')
    }
    button()
    {
        cy.get('button[type="submit"]').contains('Login').click();
    }

}
export default mainPage