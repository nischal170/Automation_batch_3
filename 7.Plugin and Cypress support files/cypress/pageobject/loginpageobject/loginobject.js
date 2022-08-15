import { LoginPage } from "../../page/Login/login";
const login=new LoginPage()
export function validlogin(){
    login.inputUsernamepass("Admin","admin123")
    login.clicklogin()
    cy.url().should('include','/dashboard')

}
export function invalidlogin(){
    login.inputUsernamepass("Admin","addsds123")
    login.clicklogin()
    cy.get("#spanMessage").contains("Invalid credentials")

}