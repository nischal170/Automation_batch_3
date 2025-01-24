export class wire_transferpage{

    clickwiretransfer(){
        cy.get("div[id='rc-tabs-0-tab-6'] span[class='icon']").click()
        cy.url().should("contain","tabName=Wire%20Transfer%20Details")
    }
    wiretransferbreadcrumb(){
        cy.get('div .breadcrumbs-header h3').should("contain","Wire Transfer Details")
    }
    iban(iban){
        cy.get('#iban').type(iban).should("have.value",iban)
    }
    country(country){
        cy.get("#countryCode").type(`${country}{enter}`)
    }
    clearinputfield(selector){
        cy.get(selector).clear({force:true})
    }
    Bankname(bankname){
        cy.get("#bankName").type(bankname).should("have.value",bankname)
    }
    Bankaddress(address){
        cy.get("#bankAddress").type(address).should("have.value",address)
    }
    postalcode(postcode){
        cy.get("#postalCode").type(postcode).should("have.value",postcode)
    }
    locality(locality){
        cy.get("#locality").type(locality).should("have.value",locality)
    }
    clickupdate_and_verify_with_api(iban,bankname,address,postalcode,locality){
        cy.intercept("PUT","**/update").as("get_update_wire_transfer")
        cy.get(".w-100").click({force:true})
        cy.wait('@get_update_wire_transfer').should((res) => {
            expect(res.response.statusCode).to.equal(200)//verify status code of api
            iban=iban.replace(/\s+/g, '')
            expect(res.response.body.iban).to.equal(iban)
            expect(res.response.body.bankName).to.equal(bankname)
            expect(res.response.body.bankAddress).to.equal(address)
            expect(res.response.body.postalCode).to.equal(postalcode)
            expect(res.response.body.locality).to.equal(locality)
        })
    }
    successfully_updated_toast_message(){
        cy.get(".ant-notification-notice-content .ant-notification-notice-message").should("contain","Success")
    }
    clearcountry(){
        cy.get("div.ant-col-xl-17.ant-col-xxl-20 span[aria-label='close-circle'] svg>path").click({force:true})

    }

    verify_iban_empty_field(){
        cy.get(".ant-form-item-required.ant-form-item-has-error div[role='alert']:nth-of-type(1)").should("contain","IBAN is required!")

    }
    verify_bankname_empty_field(){
        cy.get(".ant-form.ant-form-horizontal.mb-16 div:nth-child(3) > div:nth-child(2) div[role='alert']").should("contain","Bank Name is required!")

        
    }
    verify_bankaddress_empty_field(){
        cy.get("div.ant-form-item-required.ant-form-item-has-error div[class='ant-col ant-form-item-control'] div[role='alert']").should("contain","Street Name and Number is required!")
        
    }
    verify_country_empty_field(){
        cy.get(".ant-form.ant-form-horizontal.mb-16.align-center div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").should("contain","Bank Country is required!")
        
    }
    verify_postalcode_empty_field(){ 
        cy.get(".ant-form.ant-form-horizontal div:nth-child(4) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1)").should("contain","Postal Code is required!") 
        
    }
    verify_locality_empty_field(){
        cy.get(".ant-form-item-required :nth-of-type(3) div[role='alert']").should("contain","Locality is required!")
        
    }
}