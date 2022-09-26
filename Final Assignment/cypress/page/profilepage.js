export class profilepage{
    clickaccountsettings(){
        cy.get(".btn__profile").click()
        cy.get(".ant-dropdown-menu-item a[href='/account-settings']").click()
    }
    breadcrumb(){
        cy.get('.breadcrumbs-header h3').should("contain","Profile")
    }
    clearinputfield(selector){
        cy.get(selector).clear()
    }
    First_name(f_name){
        cy.get("input#firstName").type(f_name).should("have.value",f_name)
   
    }
    last_name(l_name){
        cy.get("#lastName").type(l_name).should("have.value",l_name)
    }
    address(address){
        cy.get("#address").type(address).should("have.value",address)
    }
    aptcity(floor_apt_suit_unit){
        cy.get("#city").type(floor_apt_suit_unit).should("have.value",floor_apt_suit_unit)
    }
    locality(locality){
        cy.get("#state").type(locality).should("have.value",locality)
    }
    select_country(country){
        cy.get("#country").select(country)

    }
    zipcode(zip){
        cy.get("#zip").type(zip).should("have.value",zip)
    }
    clickupdate(){
        cy.intercept("POST",Cypress.env("url")+"/users/update-profile").as('users_update_profile')
        cy.get(".ant-col-offset-5 button[type='submit']").click()
        cy.wait('@users_update_profile').should((res)=>{
            expect(res.response.statusCode).to.equal(200)
            

        })

    }
    successfulupdate(){
        cy.get(".ant-notification-notice-content .ant-notification-notice-message").should("contain","Success")
    }
    first_name_field_verify(){
        cy.get(".ant-form-item-has-error").should("exist")

    }
   

}