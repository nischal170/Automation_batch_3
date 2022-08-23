import { Login } from "../page/loginPage/loginPage";
const log=new Login()
export function validlogin(username,password){
    log.enterusername(username)
    log.enterpassword(password)
    log.clicksubmit()
    cy.url().should("include","/home")


}

export function invalidLogin(username,password){
    log.enterusername(username)
    log.enterpassword(password)
    log.clicksubmit()


}