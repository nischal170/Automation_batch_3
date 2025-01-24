
import * as login from "../pageobject/loginpageobject/loginobject";
describe('login',()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')

    })
    it('invalid login',()=>{
        login.invalidlogin()

    });
    it('valid login',()=>{
        login.validlogin()

    });
    
})