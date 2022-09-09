// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { faker } from '@faker-js/faker';
Cypress.Commands.add('Register', () => {
    
    var details={
        email:faker.internet.email(),
        firstname:faker.name.firstName(),
        lastname:faker.name.lastName(),
        password:faker.internet.password(),
        mobile:faker.phone.number('98########')
    }
    const authorization=Cypress.env("apikey")
    const options={
        method:"POST",
        url:"auth/signup",
        body:{"confirmPassword": `${details.password}`,
        "email": `${details.email}`,
        "first_name":`${details.firstname}`,
        "last_name": `${details.lastname}`,
        "mobile_number": `${details.mobile}`,
        "password": `${details.password}`},
        
    headers: {
        authorization,
      }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.duration).to.be.lessThan(1000)
            if (response.status == 201){
                cy.writeFile('cypress/fixtures/login.json',details)
            }
            cy.writeFile('cypress/fixtures/registration.json',response.body)
            
    })
});
Cypress.Commands.add('Login', () => {
    cy.readFile('cypress/fixtures/login.json').then(res=>{
        cy.request("POST",'auth/login',{"client_id": "2",
"client_secret": "olzBb6we0po4B0PSJyDpNGhhSsnvZmeio8sRoASa",
"grant_type": "password",
"password": res.password,
"provider": "",
"refresh_token": "",
"scope": "",
"username": res.email }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.duration).to.be.lessThan(1000)
    if (response.status == 200){
        cy.writeFile('cypress/fixtures/logintokensresponse.json',response.body)
       
    }
    Cypress.env('accesstoken', response.body.access_token) 
    
    

                })
    

    })

 })
 Cypress.Commands.add('Login_type', () => {
    
    cy.readFile('cypress/fixtures/login.json').then(res=>{
        cy.session([res.email,res.password],()=>{
        cy.visit('https://uat.ordering-dalle.ekbana.net/login')
    cy.get("input[placeholder='Enter Your Phone Number Or Email']").type(res.email).should("have.value",res.email)
    cy.get("input[placeholder='Password']").type(res.password).should("have.value",res.password)
    cy.get("div[class='button-box']>button[type='submit']").click()
    cy.wait(500)
    cy.get(".toast-message[role='alertdialog']").should("contain","Successfully")
})
   
        })
    })

