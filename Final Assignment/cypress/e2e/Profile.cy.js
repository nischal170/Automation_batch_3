import * as profilepageobj from "../pageobject/profilepageobj/profilepageobj"
describe('Transfer Actions',()=>{
    beforeEach('login',()=>{
        cy.Login("rajit@mailinator.com","Admin@123","ae7Dpa")
    })
    it("check breadcrumb",()=>{
        cy.visit('/')
        profilepageobj.click_account_settings()
        profilepageobj.check_breadcrumb()
    });
    it("Input Field Validation",()=>{
        cy.visit('/')
        profilepageobj.click_account_settings()
        profilepageobj.check_name()
    })
    it("15.verify wiretransfer details",()=>{
        cy.visit('/')
        profilepageobj.click_account_settings()
        profilepageobj.click_wire_transfer()
        
    })
    it.only('Update profile and verify',()=>{
        cy.visit('/')
        profilepageobj.click_account_settings()
        profilepageobj.update_profile()
        profilepageobj.click_update_and_verify_toast()
    

    })

   

})