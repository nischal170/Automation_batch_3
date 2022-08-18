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

Cypress.Commands.add('login', () => { 

    cy.request("POST",'oauth2/token',{"client_id": "dd22611cfbc6c1ffdd2549e2445c5250",
        "client_secret": "4fb1f68752ad86d0d0459c6f1cff4455",
        "grant_type": "password",
        "password": "Itihas@123",
        "username": "itihas.adhikari@ekbana.info" }).then((response) => {
            Cypress.env('token', response.body.access_token);
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
      return response;
 });
})
Cypress.Commands.add('OTP', () => { 
    const token = Cypress.env('token');
    const authorization = `Bearer ${ token }`;
    const options={
        method: 'POST',
        url: 'auth/verify-otp',
        body:{"otp":"ae7Dpa"},
        headers: {authorization}};

    cy.request(options).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.duration).to.be.lessThan(1000)
      return response;
 });
})