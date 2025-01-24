import { Register2 } from "../../page/secondprojectregister/2registerpage";

const Regii=new Register2()
export function Registration_for_second(){
    Regii.inputFullname("Keanu","Reeves")
    Regii.inputEmail("reeves2017@gmail.com")
    Regii.typePhone("9824634764")
    Regii.typeBillingAddress("apple Inc.","london,nepal","Nepal,kathmandu","paris","bagmati","4400","Nepal","NP")
    Regii.typePasswords("%48L2Md12")
    Regii.captchaClick()
    Regii.clickSubmit()
}