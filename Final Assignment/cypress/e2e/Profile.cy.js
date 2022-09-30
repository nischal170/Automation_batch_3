import * as profilepageobj from "../pageobject/profilepageobj/profilepageobj"
describe('Profile Page',()=>{
    beforeEach('login',()=>{
        cy.login_via_api(Cypress.env("email"),Cypress.env("password"),Cypress.env("otp"))
        //cy.Login(Cypress.env("email"),Cypress.env("password"),Cypress.env("otp"))
        cy.visit('/')
    })
    it("Check Breadcrumb",()=>{
        profilepageobj.click_account_settings()
        cy.wait(500)
        profilepageobj.check_breadcrumb()
    });
    it("Input Field Validation",()=>{
        profilepageobj.click_account_settings()
        cy.wait(500)
        profilepageobj.clear_input_fields()
        profilepageobj.verify_name_input_fields()
        profilepageobj.verify_street_input_field()
        profilepageobj.postalcode_field_verify()
        profilepageobj.locality_field_verify()
        profilepageobj.country_field_verify()
        
    })
  
    it('Update profile and verify with ui and api',()=>{
        profilepageobj.click_account_settings()
        cy.wait(500)
        profilepageobj.update_profile()
        profilepageobj.click_update_and_verify_toast()
        profilepageobj.verify_inputfields_after_update()
    

    })

   

})