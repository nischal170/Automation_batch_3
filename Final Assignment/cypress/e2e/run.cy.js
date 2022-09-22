import * as buypageobj from "../pageobject/buypageobject/buypageobj";
import * as coinpageobj from "../pageobject/coinpageobj/coinpageobj";
import *  as homepageobj from "../pageobject/homepage/homepageobject";
import * as sellpageobj from "../pageobject/sellpageobject/sellpageobj";
describe('login',()=>{
    beforeEach('login',()=>{
        cy.Login("rajit@mailinator.com","Admin@123","ae7Dpa")
    })
    it('Verify Title and Breadcrumb',()=>{
        cy.visit('/')
        homepageobj.verify_title()
        homepageobj.verify_breadcrumb()
    });

    it('Verify available wallet balance',()=>{
        cy.visit('/')
        homepageobj.available_balance()
    });
    it('Verify Current balance',()=>{
        cy.visit('/')
        homepageobj.current_balance()
    });
    it("Verify Breadcrumb of Coins page",()=>{
        cy.visit('/')
        coinpageobj.coin_page_button()
        coinpageobj.bread_crumb()
    })
    
    it('Buy and view verification',()=>{
        cy.visit('/')
        coinpageobj.coin_page_button()
        coinpageobj.click_buy()
        buypageobj.buy_via_ui()//1.)buys via ui 2.) checks toast message 3.)verifies with api
        coinpageobj.click_view()//clicks view of first element
        coinpageobj.click_view_verify('@get_buy_details')//alias is sent to a single function(both buy and sell verify has a single function to verify)
        //verifies in view table with the api data(reference number,coins bought,charges,and total )   
    });
    it("verify buy modify",()=>{
        cy.visit('/')
        coinpageobj.coin_page_button()
        coinpageobj.click_modify()
        coinpageobj.type_update_and_verify("buy")
    })
    it.only('Sell and view verification',()=>{
        cy.visit('/')
        coinpageobj.coin_page_button()
        sellpageobj.sell_via_ui()//buys via ui,verifies with api,assertions in toast message
        coinpageobj.click_view()
        coinpageobj.click_view_verify('@get_sell_details')//sending alias to the function
    })
    it("verify sell modify",()=>{
        cy.visit('/')
        coinpageobj.coin_page_button()
        coinpageobj.click_modify_for_sell()//this function modifies for sell
        coinpageobj.type_update_and_verify("sell")//types the updated value,updates it and verifies ui with the api
    })
    
})