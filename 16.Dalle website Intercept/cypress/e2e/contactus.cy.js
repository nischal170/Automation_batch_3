import { faker } from '@faker-js/faker';
describe('API Intercept of Dalle momos website',()=>{
    before(()=>{
        cy.visit('/page/contact-us')
        

    });
    it("Contact Us page",()=>{
        var details={
            email:faker.internet.email(),
            name:faker.name.firstName()+faker.name.lastName(),
            mobile:faker.phone.number('98########'),
            message:faker.lorem.paragraph(),
        }
        var arr=[]
        let Elements = "";
        cy.get("ng-select[placeholder='Select Subject']").click()
        cy.get("div.ng-dropdown-panel-items.scroll-host > div > div .ng-option-label").each(($element) => {
        //cy.log($element)
        Elements = $element.text()
        arr.push(Elements)
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
            cy.request(options).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lessThan(5000)
    
            })
       
        
        })


    });
   
   
    })