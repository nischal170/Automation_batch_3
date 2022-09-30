export class profilepage{
    clickaccountsettings(){
        cy.get(".btn__profile").click({force:true})
        cy.wait(500)
        cy.get(".ant-dropdown-menu-item a[href='/account-settings']").click({force:true})
        cy.wait(500)
        cy.url().should("include","/account-settings?tabName=Profile")
    }
    breadcrumb(){
        cy.get('.breadcrumbs-header h3').should("contain","Profile")
    }
    clearinputfield(selector){
        cy.get(selector).focus().clear()
    }
    First_name(f_name){
        cy.get("#firstName").type(f_name).should("have.value",f_name)
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
    //select_country(country){
       // cy.get("#country").select(country)

    //}
    zipcode(zip){
        cy.get("#zip").type(zip).should("have.value",zip)
    }
    select_country(country){
        cy.get("div[class='ant-col ant-form-item-control'] span[aria-label='close-circle']").click({force:true})
        cy.get("#country").type(`${country}{enter}`)

    }
    clearcountry(){
        cy.get(".ant-select-clear > .anticon >svg >path").click({force:true})

    }
    clickupdate(){
        cy.intercept("POST",Cypress.env("url")+"/users/update-profile").as('users_update_profile')
        cy.intercept("GET",Cypress.env("url")+"/users/profile").as('view_updated_users_profile')
        cy.get(".ant-col-offset-5 button[type='submit']").click()
        cy.wait("@view_updated_users_profile")
        cy.wait('@users_update_profile').should((res)=>{
            expect(res.response.statusCode).to.equal(200)
        })

    }
    successfulupdate(){
        cy.get(".ant-notification-notice-content .ant-notification-notice-message").should("contain","Success")
    }
   postalcodefield_verify(){
    cy.get(".mb-0.mt-0 > div [role='alert']").should("contain","Postal Code is required!")
   }
   localityfield_verify(){
    cy.get(".ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8:nth-of-type(2) div[role='alert']").should("contain","Locality is required!")
   }
   countryfield_verify(){
    cy.get(".ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8:nth-of-type(3) div[role='alert']").should("contain","Country is required!")
   }
   

}