
import { LoginPage } from "../../page/Login/Loginpage";
const loginP=new LoginPage()
export function validLogin(){
    loginP.inputUsername("itihas.adhikari@ekbana.info")
    loginP.inputPassword("Itihas@123")
    loginP.clickSignIn()
    cy.wait(2000)
    loginP.inputOtp("ae7Dpa")
    loginP.clickOtpsubmit()
}