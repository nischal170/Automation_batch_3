import { register } from "../page/registerpage/register";
import { faker } from '@faker-js/faker';
const re=new register()
export function writedata(){
    var registration_data={
        First_Name:faker.name.firstName(),
        Last_Name:faker.name.lastName(),
        Phone_no:faker.phone.number('98########'),
        email:faker.internet.email(),
        password:faker.internet.password()


    }
    cy.writeFile('cypress/fixtures/details.json',registration_data)
}
export function read(){
    cy.readFile('cypress/fixtures/details.json').then(res=>{
        re.entername(res.First_Name,res.Last_Name)
        re.enterphno(res.Phone_no)
        re.enteremail(res.email)
        re.enterpassword(res.password)
        //Cypress.env('email', res.email)
        //Cypress.env('password',res.password)
        

    })
}
    
export function clicck(){
    re.clicksubmit()

}  

