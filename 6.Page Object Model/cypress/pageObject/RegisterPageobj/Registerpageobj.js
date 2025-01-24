
import { RegisterPage } from "../../page/Register/registerPage";
const Regi=new RegisterPage()
export function Registration(){
    Regi.inputFullname("Keanu","Reeves")
    Regi.inputEmail("reeves2017@gmail.com")
    Regi.selectCountry("Nepal")
    Regi.typePhone("9824634764")
    Regi.typePasswords("%48L2Md12")
    Regi.clickCheck()
    cy.wait(500)
    Regi.clickSubmit()
    Regi.clickCopypvtkey()
    Regi.clickTopaste()
    Regi.clickFinalsubmit()
}