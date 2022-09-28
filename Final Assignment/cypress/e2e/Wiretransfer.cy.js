import * as wiretransfobj from "../pageobject/wiretransferobj/wiretransferobj";
import * as profilepageobj from "../pageobject/profilepageobj/profilepageobj"

describe('Transfer Actions',()=>{
    beforeEach('login',()=>{
        cy.login_via_api("rajit@mailinator.com","Admin@123","ae7Dpa")
        cy.visit('/')
    })
    it('Verify Breadcrumb',()=>{
        profilepageobj.click_account_settings()
        wiretransfobj.click_wire_transfer()
        wiretransfobj.check_breadcrumb()
    });
    it('update wiretransfer details',()=>{
        profilepageobj.click_account_settings()
        wiretransfobj.click_wire_transfer()
        wiretransfobj.update_wire_transfer()
        wiretransfobj.click_update_and_verify_toast()
    });
})
