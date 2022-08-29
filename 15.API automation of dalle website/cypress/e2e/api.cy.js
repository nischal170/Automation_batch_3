import { faker } from '@faker-js/faker';
describe('Dalle momos api',()=>{
    before(()=>{
            
    cy.request("POST",'auth/login',{"client_id": "2",
    "client_secret": "1C0l4HTDcuVa6qQdsgZQVByfoU53KCc2to7FtbRW",
    "grant_type": "password",
    "password": "XfVuKh7_wQe0nsC",
    "provider": "",
    "refresh_token": "",
    "scope": "",
    "username": "Antonina.Reilly99@gmail.com"}).then((response) => {
        cy.writeFile('cypress/fixtures/logintokensresponse.json',response)
   
                    })
        
    
        
    });

    it("do nothing",()=>{
        cy.log("do nothing")

    });

    
})