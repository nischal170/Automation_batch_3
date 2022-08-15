
export class LoginPage{
    inputUsernamepass(username,password){
        cy.get("#txtUsername").type(username).should("have.value",username)
        cy.get("#txtPassword").type(password).should("have.value",password)


    }
    clicklogin(){
        cy.get("#btnLogin").click()
        
    }
}