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
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lessThan(1000)
                cy.writeFile('cypress/fixtures/extra/terms_and_conditions.json',response.body)
                
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
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lessThan(1000)
                cy.writeFile('cypress/fixtures/extra/about_us.json',response.body)
                
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
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lessThan(1000)
                cy.writeFile('cypress/fixtures/extra/privacy-policy.json',response.body)
                
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
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lessThan(1000)
                cy.writeFile('cypress/fixtures/extra/Feedback_section.json',response.body)
                
        })

    });
    it("Contact us",()=>{
        const key=Cypress.env("apikey")
        const options={
            method:"POST",
            url:"contact-us",
            body:{"contact":faker.phone.number('98########'),
            "email": faker.internet.email(),
            "message":faker.lorem.paragraph() ,
            "name": faker.name.firstName()+faker.name.lastName(),
            "subject": "Web"},
        
            
        headers: {
            'Api-Key':`${key}`,
          }
            };
            cy.request(options).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lessThan(1000)
                cy.writeFile('cypress/fixtures/extra/contactusresponse.json',response.body)
                
        })

    });
    /* ASKS FOR CITY
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
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lessThan(1000)
                cy.writeFile('cypress/fixtures/extra/productoffer.json',response.body)
                
        })

    });*/
   
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
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lessThan(1000)
                cy.writeFile('cypress/fixtures/extra/franchise.json',response.body)
                
        })

    });
    it("Testimonials",()=>{
        const key=Cypress.env("apikey")
        const options={
            method:"GET",
            url:"testimonial?offer=1&page=1",
        
            
        headers: {
            'Api-Key':`${key}`,
          }
            };
            cy.request(options).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lessThan(1000)
                cy.writeFile('cypress/fixtures/extra/testimonials.json',response.body)
                
        })

    });
    it("Gallery",()=>{
        const key=Cypress.env("apikey")
        const options={
            method:"GET",
            url:"gallery?type=gallery&page=1&perPage=16",
        
            
        headers: {
            'Api-Key':`${key}`,
          }
            };
            cy.request(options).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lessThan(1000)
                cy.writeFile('cypress/fixtures/extra/galleryresponse.json',response.body)
                
        })

    });
    
    


})