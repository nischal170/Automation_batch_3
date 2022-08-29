import { faker } from '@faker-js/faker';
describe("These apis don't require login",()=>{
    
    it("terms and conditions",()=>{
        const key=Cypress.env("apikey")
        const options={
            method:"GET",
            url:"page/terms-and-conditions",
        
            
        headers: {
            'Api-Key':`${key}`,
          }
            };
            cy.request(options).then((response) => {
                cy.writeFile('cypress/fixtures/extra/terms_and_conditions.json',response)
                
        })

    });
    it("About US",()=>{
        const key=Cypress.env("apikey")
        const options={
            method:"GET",
            url:"page/about-us",
        
            
        headers: {
            'Api-Key':`${key}`,
          }
            };
            cy.request(options).then((response) => {
                cy.writeFile('cypress/fixtures/extra/about_us.json',response)
                
        })

    });
    
    it("Privacy policy",()=>{
        const key=Cypress.env("apikey")
        const options={
            method:"GET",
            url:"page/privacy-policy",
        
            
        headers: {
            'Api-Key':`${key}`,
          }
            };
            cy.request(options).then((response) => {
                cy.writeFile('cypress/fixtures/extra/privacy-policy.json',response)
                
        })

    });
    it("Feedback section",()=>{
        const key=Cypress.env("apikey")
        const options={
            method:"GET",
            url:"feedback-section",
        
            
        headers: {
            'Api-Key':`${key}`,
          }
            };
            cy.request(options).then((response) => {
                cy.writeFile('cypress/fixtures/extra/Feedback_section.json',response)
                
        })

    });
    it("Contact us",()=>{
        const key=Cypress.env("apikey")
        const options={
            method:"GET",
            url:"faq",
        
            
        headers: {
            'Api-Key':`${key}`,
          }
            };
            cy.request(options).then((response) => {
                cy.writeFile('cypress/fixtures/extra/faq.json',response)
                
        })

    });
    it("Product offer",()=>{
        const key=Cypress.env("apikey")
        const options={
            method:"GET",
            url:"product?offer=1&page=1",
        
            
        headers: {
            'Api-Key':`${key}`,
          }
            };
            cy.request(options).then((response) => {
                cy.writeFile('cypress/fixtures/extra/productoffer.json',response)
                
        })

    });
    /*ASKS FOR CITY
    it("Franchise",()=>{
        const key=Cypress.env("apikey")
        const options={
            method:"POST",
            url:"franchise",
            body:{"address": "sinamangal",
            "contactNo": faker.phone.number('98########'),
            "email": faker.internet.email(),
            "firstName": faker.name.firstName(),
            "franchise_type": "multi unit",
            "lastName": faker.name.lastName(),
            "middleName": "bahadur",
            "previously_applied": "false"},
        
            
        headers: {
            'Api-Key':`${key}`,
          }
            };
            cy.request(options).then((response) => {
                cy.writeFile('cypress/fixtures/extra/franchise.json',response)
                
        })

    });*/
    


})