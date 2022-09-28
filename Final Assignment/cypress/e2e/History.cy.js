
import * as historypageobj from "../pageobject/Historypageobj/historypageobj";
describe('Transfer Actions',()=>{
    beforeEach('login',()=>{
        cy.login_via_api("rajit@mailinator.com","Admin@123","ae7Dpa")
        cy.visit('/')
    })
    it('Verify Breadcrumb',()=>{
        historypageobj.click_history()
        historypageobj.check_breadcrumb()
    })
    it('Verify Table headers',()=>{
        historypageobj.click_history()
        historypageobj.check_breadcrumb()
        historypageobj.verify_table()
    });
    it.only('automate type filter',()=>{
        historypageobj.click_history()
        historypageobj.automate_type_filter()
    })
    
})