
import * as coinpageobj from "../pageobject/coinpageobj/coinpageobj";
import * as sellpageobj from "../pageobject/sellpageobject/sellpageobj";
describe('Sell actions',()=>{
    beforeEach('login',()=>{
        cy.Login("rajit@mailinator.com","Admin@123","ae7Dpa")
    })
    it('Sell and view verification',()=>{
        cy.visit('/')
        coinpageobj.coin_page_button()
        sellpageobj.sell_via_ui()//buys via ui,verifies with api,assertions in toast message
        coinpageobj.click_view()
        coinpageobj.click_view_verify('@get_sell_details')//sending alias to the function
    })
    it("Verification of Modification of sell Action",()=>{
        cy.visit('/')
        coinpageobj.coin_page_button()
        coinpageobj.click_modify_for_sell()//this function modifies for sell
        coinpageobj.type_update_and_verify("sell")//types the updated value,updates it and verifies ui with the api
    })
    

})