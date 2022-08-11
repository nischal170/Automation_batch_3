export class LoginPage{
    inputUsername(username){
        cy.get("#username").type(username,{
            delay:100
        }).should("have.value",username)
    }
    inputPassword(password){
        cy.get("#password").type(password,{delay:100
        }).should("have.value",password)
    }
    clickSignIn(){
        cy.get("button[type='submit']").click()
    }

    clickForgetpassword(){
        cy.get("a[href='/forgot-password']").click()
        cy.url().should('include', '/forgot-password')
    }

    clickRegisterNewAccount(){
        cy.get("a[href='/signup']").click()
        cy.url().should('include', '/signup')

    }

    inputOtp(otp){
        cy.get('#otp').type(otp,{delay:100}).should("have.value",otp)

    }

    clickOtpsubmit(){
        cy.get("div[class='ant-row ant-form-item'] button[type='submit']").click()
    }

    
    
}