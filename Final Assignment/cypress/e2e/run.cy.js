import * as buy from "../pageobject/buypageobject/buypageobj";
import *  as homepage from "../pageobject/homepage/homepageobject";
describe('login',()=>{
    beforeEach('login',()=>{
        cy.Login("rajit@mailinator.com","Admin@123","ae7Dpa")
    })
    it('Verify Title and breadcrumb',()=>{
        cy.visit('/')
        homepage.verify_title()
        homepage.verify_breadcrumb()
    });

    it('Verify available wallet balance',()=>{
        cy.visit('/')
        homepage.available_balance()
    });
    it('Verify Current balance',()=>{
        cy.visit('/')
        homepage.current_balance()
    });
    
    it.only('BUY',()=>{
        cy.visit('/')
        buy.verify()
        buy.buy_via_ui()
    });
    
})