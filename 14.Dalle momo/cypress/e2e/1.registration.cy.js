import * as regii from '../pageobject/registerpageobj';
describe("Enter registration Data",()=>{
    before(()=>{
        cy.visit('/register')
    })
    it('Fill Registration',()=>{
        regii.writedata()
        regii.read()
        regii.clicck()
       
    });

})