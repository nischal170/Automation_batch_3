import * as wiretransfobj from "../pageobject/wiretransferobj/wiretransferobj";
import * as profilepageobj from "../pageobject/profilepageobj/profilepageobj"

describe('Transfer Actions',()=>{
    beforeEach('login',()=>{
        cy.Login("rajit@mailinator.com","Admin@123","ae7Dpa")
    })
    it('Verify Breadcrumb',()=>{
        cy.visit('/')
        profilepageobj.click_account_settings()
        wiretransfobj.click_wire_transfer()
        wiretransfobj.check_breadcrumb()
    });
    it.only('update wiretransfer details',()=>{
        cy.visit('/')
        profilepageobj.click_account_settings()
        wiretransfobj.click_wire_transfer()
        wiretransfobj.update_wire_transfer()
        wiretransfobj.click_update_and_verify_toast()
    });
})
