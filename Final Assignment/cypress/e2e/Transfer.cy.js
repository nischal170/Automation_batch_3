import * as coinpageobj from "../pageobject/coinpageobj/coinpageobj";
import * as historypageobj from "../pageobject/Historypageobj/historypageobj";
import * as transferpageobj from "../pageobject/transferpageobject/transferpageobj";
describe('Transfer Actions',()=>{
    beforeEach('login',()=>{
        cy.login_via_api("rajit@mailinator.com","Admin@123","ae7Dpa")
        cy.visit('/')
    })
   
    it('Transfer',()=>{
        coinpageobj.click_coin_page_button()
        transferpageobj.transfer_via_ui() 
        transferpageobj.verify_toast_message()
        transferpageobj.verify_with_api()
        cy.wait(10000) //wait 10 sec so that transfer process completes
        transferpageobj.save_to_json()//reference code is saved to json
        
    });
    it('Verify Transfer in history page',()=>{
        historypageobj.click_history()
        historypageobj.search_in_history_page()
        historypageobj.verify_reference_code()//verify the searched reference code in search
    });
    
    it('Transfer with invalid email',()=>{
        coinpageobj.click_coin_page_button()
        transferpageobj.transfer_with_invalid_email()
    });
    it ('Empty Fields',()=>{
        coinpageobj.click_coin_page_button()
        transferpageobj.input_field_assertions() 
    });
  

    it('Verify Breadcrumb of history page',()=>{
        historypageobj.click_history()
        historypageobj.check_breadcrumb()  
    });
    
    
    
    


})