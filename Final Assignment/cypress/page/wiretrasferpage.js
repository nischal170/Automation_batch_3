export class wire_transferpage{

    clickwiretransfer(){
        cy.get("div[id='rc-tabs-0-tab-6'] span[class='icon']").click()
    }
    wiretransferbreadcrumb(){
        cy.get('div .breadcrumbs-header h3').should("contain","Wire Transfer Details")
    }
    iban(iban){
        cy.get('#iban').type(iban).should("have.value",iban)
    }
    country(country){
        cy.get("#countryCode").select(country)

    }
    clearinputfield(selector){
        cy.get(selector).clear()
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
    clickupdate(iban,bankname,address,postalcode,locality){
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
    successfulupdate(){
        cy.get(".ant-notification-notice-content .ant-notification-notice-message").should("contain","Success")
    }
}