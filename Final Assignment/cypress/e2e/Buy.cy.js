import * as buypageobj from "../pageobject/buypageobject/buypageobj";
import * as coinpageobj from "../pageobject/coinpageobj/coinpageobj";
describe('Buy actions',()=>{
    beforeEach('login',()=>{
        cy.login_via_api("rajit@mailinator.com","Admin@123","ae7Dpa")
        cy.visit('/')
    })
    it("Verify Breadcrumb of Coins page",()=>{
        coinpageobj.click_coin_page_button()
        coinpageobj.check_bread_crumb()
    })
    it("Verify table header of Coins page",()=>{
        coinpageobj.click_coin_page_button()
        coinpageobj.verify_table_headers()
    })

    it('Buy From Ui and verify view page data from api ',()=>{

        coinpageobj.click_coin_page_button()
        coinpageobj.click_buy()
        buypageobj.buy_via_ui()//1.)buys via ui 2.)verifies with api
        buypageobj.verify_the_toast_message_buy_coins()
        coinpageobj.click_view()//clicks view of first element in table
        coinpageobj.verify_viewpage_with_api('@get_buy_details')//alias is sent to a single function(both buy and sell verify has a single function to verify)
        //verifies in view table with the api data(reference number,coins bought,charges,and total )   
    });
    it("Verify the modified Buy",()=>{
        coinpageobj.click_coin_page_button()
        coinpageobj.click_modify()
        coinpageobj.type_update_and_verify("buy")
    })

})