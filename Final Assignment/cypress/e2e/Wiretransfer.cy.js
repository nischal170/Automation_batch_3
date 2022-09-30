import * as wiretransfobj from "../pageobject/wiretransferobj/wiretransferobj";
import * as profilepageobj from "../pageobject/profilepageobj/profilepageobj"

describe('Wiretransfer Actions',()=>{
    beforeEach('login',()=>{
        cy.login_via_api("rajit@mailinator.com","Admin@123","ae7Dpa")
        cy.visit('/')
    })
    it('Verify Breadcrumb',()=>{
        profilepageobj.click_account_settings()
        wiretransfobj.click_wire_transfer()
        wiretransfobj.check_breadcrumb()
    });
    it('Update wiretransfer details and verify ui with api',()=>{
        profilepageobj.click_account_settings()
        wiretransfobj.click_wire_transfer()
        wiretransfobj.update_wire_transfer()//only types new values in the input field
        wiretransfobj.click_update_and_verify_toast()//clicks update button ,verifies toast message,verifies updated data withapi
        wiretransfobj.verify_inputfields_after_update()//verifies with the input fields 
    });
    it("Verify empty input fields",()=>{
        profilepageobj.click_account_settings()
        wiretransfobj.click_wire_transfer()
        wiretransfobj.clear_input_fields()//clear all input fields of wiretransferpage
        wiretransfobj.verify_empty_input_fields()

    });
})
