import { Registration } from "../../pageObject/RegisterPageobj/Registerpageobj";
describe('Register',()=>{
    beforeEach(()=>{
        cy.visit('https://dev.suriname.codefirm.net/signup')
    })
    it('valid Registration',()=>{
        Registration()

    });

})