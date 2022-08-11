export class Register2{
    inputFullname(firstname,lastname){
        cy.get('#inputFirstName').type(firstname).should("have.value",firstname)
        cy.get('#inputLastName').type(lastname).should("have.value",lastname)
    }
    inputEmail(Email){
        cy.get("#inputEmail").type(Email,{delay:100
        }).should("have.value",Email)
    }

    typePhone(phoneno){
        cy.get('#inputPhone').type(phoneno).should("have.value",phoneno)
        cy.get("#customfield2").type(phoneno).should("have.value",phoneno)
    }
    typeBillingAddress(company,street1,street2,city,state,postcode,country,country_short){
        cy.get('#inputCompanyName').type(company).should("have.value",company)
        cy.get('#inputAddress1').type(street1).should("have.value",street1)
        cy.get('#inputAddress2').type(street2).should("have.value",street2)

        cy.get('#inputCity').type(city).should("have.value",city)
        cy.get('#stateinput').type(state).should("have.value",state)
        cy.get("#inputPostcode").type(postcode).should("have.value",postcode)
        cy.get("#inputCountry").select(country).should("have.value",country_short)
    }

    typePasswords(password){
        cy.get('#inputNewPassword1').type(password).should("have.value",password)
        cy.get('#inputNewPassword2').type(password).should("have.value",password)
    }


    clickSubmit(){
        cy.get("input[value='Register']").click()

    }



    
    
}