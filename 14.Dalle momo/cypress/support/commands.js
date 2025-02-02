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
Cypress.Commands.add('login', (email, password) => { 
    cy.session([email,password],()=>{
        cy.visit('/login')
        cy.get("input[placeholder='Enter Your Phone Number Or Email']").type(email).should("have.value",email)
        cy.get("input[placeholder='Password']").type(password).should("have.value",password)
        cy.get("div[class='button-box']>button[type='submit']").click()
        cy.wait(500)
        cy.get(".toast-message[role='alertdialog']").should("contain","Successfully")
    })
 })