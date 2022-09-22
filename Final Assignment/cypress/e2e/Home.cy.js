import * as coinpageobj from "../pageobject/coinpageobj/coinpageobj";
import *  as homepageobj from "../pageobject/homepage/homepageobject";

describe('Actions in Homepage',()=>{
    beforeEach('login',()=>{
        cy.Login("rajit@mailinator.com","Admin@123","ae7Dpa")
    })
    it('Verify Title',()=>{
        cy.visit('/')
        homepageobj.verify_title()
        
    });
    it('verify Breadcrumb',()=>{
        cy.visit('/')
        homepageobj.verify_breadcrumb()
    })

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
    
    
    
})