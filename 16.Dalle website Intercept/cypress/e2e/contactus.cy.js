import { faker } from '@faker-js/faker';
describe('API Intercept of Dalle momos website',()=>{
    before(()=>{
        cy.visit('/page/contact-us')
        

    });
    it("Contact Us page",()=>{
        var details={
            email:faker.internet.email(),
            name:faker.name.firstName()+" "+faker.name.lastName(),
            mobile:faker.phone.number('98########'),
            message:faker.lorem.paragraph(),
        }
        let Elements = "";//declaring empty string
        var arr=[]//declaring empty array to store requestbody in each loop 
        var store_response=[]
        cy.get("ng-select[placeholder='Select Subject']").click()
        cy.get("div.ng-dropdown-panel-items.scroll-host > div > div .ng-option-label").each(($element) => {//Looping through each dropdown elememnts
        Elements = $element.text()
        
        var key="q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6"
        const options={
            method: 'POST',
            url: 'api/v4/contact-us',
            body:
                {
                    "name": `${details.name}`,
                    "email": `${details.email}`,
                    "subject": `${Elements}`,
                    "message": `${faker.lorem.paragraph()}`,
                    "contact": `${details.mobile}`
                }
            ,
            
            headers: {
                'Api-Key':`${key}`
              }
            };
            /*using request to post the queries */
            cy.request(options).then((response) => {
                expect(response.status).to.eq(200)//status code is 200 this means the message is posted
                expect(response.duration).to.be.lessThan(5000)
                arr.push(response.requestBody)//pushing individual request to the array
                store_response.push(response.body.data.success)
                
                    
                 
                
                
    
            })
            
            cy.writeFile('cypress/fixtures/contact_us_data_sent.json',arr)//the array arr is stored inside//This shows what is sent in the fields of contact form in each loop inside json file
            cy.writeFile('cypress/fixtures/response_from_contact_us.json',store_response)//response of each request is saved
        
        })


    });
   
   
    })