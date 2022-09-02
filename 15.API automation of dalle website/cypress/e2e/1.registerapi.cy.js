import { faker } from '@faker-js/faker';
describe('Registration',()=>{
    var details={
        email:faker.internet.email(),
        firstname:faker.name.firstName(),
        lastname:faker.name.lastName(),
        password:faker.internet.password(),
        mobile:faker.phone.number('98########')
    }
    it("Register",()=>{
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
                cy.writeFile('cypress/fixtures/registration.json',response.body)
                
        })
        cy.writeFile('cypress/fixtures/login.json',details)
    });

})