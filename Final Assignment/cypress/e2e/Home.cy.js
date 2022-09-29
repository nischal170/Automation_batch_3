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
    it('Verify Breadcrumb',()=>{
        homepageobj.verify_breadcrumb()
    })

    it('Verify Available Wallet Balance',()=>{
        homepageobj.available_balance()
    });
    it('Verify Current Balance',()=>{
        homepageobj.current_balance()
    });
})