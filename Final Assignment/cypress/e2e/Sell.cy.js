
import * as coinpageobj from "../pageobject/coinpageobj/coinpageobj";
import * as sellpageobj from "../pageobject/sellpageobject/sellpageobj";
describe('Sell actions',()=>{
    beforeEach('login',()=>{
        cy.login_via_api("rajit@mailinator.com","Admin@123","ae7Dpa")
        //cy.Login("rajit@mailinator.com","Admin@123","ae7Dpa")
        
        cy.visit('/')
    })
    it('Sell From Ui and verify view page data from api ',()=>{
        coinpageobj.coin_page_button()
        sellpageobj.sell_via_ui()//buys via ui,verifies with api
        sellpageobj.verify_the_toast_message_sell_coins()
        coinpageobj.click_view()
        coinpageobj.verify_viewpage_with_api('@get_sell_details')//sending alias to the function
    })
    it("Verify the modified sell",()=>{
        coinpageobj.coin_page_button()
        coinpageobj.click_modify_for_sell()//this function modifies for sell
        coinpageobj.type_update_and_verify("sell")//types the updated value,updates it and verifies ui with the api
    })
    

})