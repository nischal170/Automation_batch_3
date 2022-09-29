import * as coinpageobj from "../pageobject/coinpageobj/coinpageobj";
import * as historypageobj from "../pageobject/Historypageobj/historypageobj";
import * as transferpageobj from "../pageobject/transferpageobject/transferpageobj";
describe('Transfer Actions',()=>{
    beforeEach('login',()=>{
        cy.login_via_api("rajit@mailinator.com","Admin@123","ae7Dpa")
        cy.visit('/')
    })
   
    it('Transfer',()=>{
        coinpageobj.coin_page_button()
        transferpageobj.transfer_via_ui() 
        transferpageobj.verify_toast_message()
        transferpageobj.verify_with_api()
        cy.wait(10000) 
        transferpageobj.save_to_json()
        
    });
    it('Verify Breadcrumb of history page',()=>{
        historypageobj.click_history()
        historypageobj.check_breadcrumb()  
    });
    it('Verify Search in history page',()=>{
        historypageobj.click_history()
        historypageobj.search_history()
        historypageobj.verify_reference()
    });
    
    
    
    


})