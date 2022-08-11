import { validLogin } from "../../pageObject/loginPageObject/loginPageobject";


describe('login',()=>{
    beforeEach(()=>{
        cy.visit('https://dev.suriname.codefirm.net/login')
    })
    it('valid login',()=>{
        validLogin()

    });

})
