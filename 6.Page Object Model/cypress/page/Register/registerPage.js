export class RegisterPage{
    inputFullname(firstname,lastname){
        cy.get('#firstName').type(firstname).should("have.value",firstname)
        cy.get('#lastName').type(lastname).should("have.value",lastname)
    }
    inputEmail(Email){
        cy.get("#email").type(Email,{delay:100
        }).should("have.value",Email)
    }
    selectCountry(country){
        cy.get("#country").type(`${country}{enter}`)
    }

    typePhone(phoneno){
        cy.get('#phone').type(phoneno).should("have.value",phoneno)
    }

    typePasswords(password){
        cy.get('#password').type(password).should("have.value",password)
        cy.get('#confirmPassword').type(password).should("have.value",password)
    }

    clickCheck(){
        cy.get("#registerAct-checkbox").check({force: true})
        

    }
    clickSubmit(){
        cy.get("button[type='submit']").click()

    }



    clickCopypvtkey(){
        cy.get("div[class='relative-box'] button:nth-child(2)").click({delay:100})
        cy.window().its('navigator.clipboard').invoke('readText')
        cy.get("button[class='ant-btn ant-btn-primary w__100']").click()

    }

    clickTopaste(){
        cy.window().its('navigator.clipboard').invoke('readText').then((text) => {
            //cy.log(typeof(text));
            
            cy.get("input[type='password']").type(text);
           
        });
       
    }

    clickFinalsubmit(){
        cy.get("button[type='button']").click()
    }

    
    
}