import * as coinpageobj from "../pageobject/coinpageobj/coinpageobj";
import *  as homepageobj from "../pageobject/homepage/homepageobject";

describe('Actions in Homepage',()=>{
    beforeEach('login',()=>{
        cy.login_via_api("rajit@mailinator.com","Admin@123","ae7Dpa")
        cy.visit('/')
    })
    it('Verify Title',()=>{
        homepageobj.verify_title()
        
    });
    it('verify Breadcrumb',()=>{
        homepageobj.verify_breadcrumb()
    })

    it('Verify available wallet balance',()=>{
        homepageobj.available_balance()
    });
    it('Verify Current balance',()=>{
        homepageobj.current_balance()
    });
    it("Verify Breadcrumb of Coins page",()=>{
        coinpageobj.coin_page_button()
        coinpageobj.bread_crumb()
    })
    
    
    
})