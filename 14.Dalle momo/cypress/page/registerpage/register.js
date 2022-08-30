export class register{
    entername(firstname,lastname){
        cy.get("input[placeholder='Enter Your First Name']").type(firstname).should("have.value",firstname)
        cy.get("input[placeholder='Enter Your Last Name']").type(lastname).should("have.value",lastname)

    }
    enterphno(phone){
        cy.get("input[placeholder='Enter Your Phone Number']").type(phone).should("have.value",phone)
    }
    enteremail(email){
        cy.get("input[placeholder='Enter Your Email']").type(email).should("have.value",email)

    }
    enterpassword(password){
        cy.get("input[placeholder='Enter Your Password']").type(password).should("have.value",password)
        cy.get("input[placeholder='Confirm Your Password']").type(password).should("have.value",password)
    }
    clicksubmit(){
        cy.get("div[class='button-box']>button[type='submit']").click().should("contain","Register")
        cy.wait(500)
        cy.get('.toast-message[role="alertdialog"]').should("contain","Successfully!")
    }
}