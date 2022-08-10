
class Loginpage
{
    email()
    {
        cy.get('input[id="login-username"]').type('sdkjfh@gmail.com')

    }

    password()
    {
        cy.get('input[id="login-password"]').type('hello123')

    }

    loginButton()
    {
        cy.get('[id="login-button"]').contains('Log In').click();

    }
    

}
export default Loginpage
