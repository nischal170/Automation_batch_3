import * as profilepageobj from "../pageobject/profilepageobj/profilepageobj"
describe('Transfer Actions',()=>{
    beforeEach('login',()=>{
        cy.login_via_api("rajit@mailinator.com","Admin@123","ae7Dpa")
        cy.visit('/')
    })
    it("check breadcrumb",()=>{
        profilepageobj.click_account_settings()
        profilepageobj.check_breadcrumb()
    });
    it("Input Field Validation",()=>{
        profilepageobj.click_account_settings()
        profilepageobj.clear_input_fields()
        profilepageobj.verify_name_input_fields()
        profilepageobj.verify_street_input_field()
        profilepageobj.postalcode_field_verify()
        profilepageobj.locality_field_verify()
        profilepageobj.country_field_verify()
        
    })
  
    it('Update profile and verify',()=>{
        profilepageobj.click_account_settings()
        profilepageobj.update_profile()
        profilepageobj.click_update_and_verify_toast()
    

    })

   

})