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
//import 'cypress-localstorage-commands';


Cypress.Commands.add('Login', (email,password,otp) => {
    cy.session([email,password,otp],()=>{
    cy.visit('/')
    cy.get("#username").type(email).should("have.value",email)
    cy.get("#password").type(password).should("have.value",password)
    cy.get("button[type='submit']").click()
    cy.wait(200)
    cy.get(".ant-notification-notice-description").should("contain","OTP sent successfully to your email")
    cy.get("div .top-text :first-child").should("contain","Enter the 6 digit code sent to")
    cy.get('#otp').type(otp).should("have.value",otp)
    cy.get("div[class='ant-row ant-form-item'] button[type='submit']").click()
    cy.wait(200)
    cy.get(".ant-notification-notice-description").should("contain","OTP verified successfully")
    cy.get(".header__breadcrumb > h2 ").should("contain","Dashboard")
    })

    })

    Cypress.Commands.add('login', (email,password) => { 

        cy.request("POST",'oauth2/token',{"client_id": "dd22611cfbc6c1ffdd2549e2445c5250",
            "client_secret": "4fb1f68752ad86d0d0459c6f1cff4455",
            "grant_type": "password",
            "password": password,
            "username": email }).then((response) => {
                Cypress.env('token', response.body.access_token);
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lessThan(1000)
          return response;
     });
    })
   