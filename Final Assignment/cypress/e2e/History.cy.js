
import * as historypageobj from "../pageobject/Historypageobj/historypageobj";
describe('Transfer Actions',()=>{
    beforeEach('login',()=>{
        cy.Login("rajit@mailinator.com","Admin@123","ae7Dpa")
    })
    it('headers',()=>{
        cy.visit('/')
        historypageobj.click_history()
        historypageobj.verify_table()
    });
    
})