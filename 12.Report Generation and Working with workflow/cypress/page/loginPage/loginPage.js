
export class Login{
    enterusername(string){
    cy.get("input[placeholder='Enter Your Username']").type(string).should("have.value",string)
    
    

    }
    enterpassword(string){
        cy.get("input[placeholder='Enter your Password']").type(string).should("have.value",string)
    
    }
    clicksubmit(){
        cy.get("button[class='btn btn-default btn-login']").click()


    }
}