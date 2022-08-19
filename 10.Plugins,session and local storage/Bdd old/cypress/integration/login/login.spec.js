//const { contains } = require("cypress/types/jquery")

Given ("Url Visit",()=>{
    cy.visit("https://koklassv4-orderingdev-ms.ekbana.net/system/login")
})
And("Entercorrect",()=>{
    cy.get("input[placeholder='Enter Your Username']").type("automation").should("have.value","automation")
    cy.get("input[placeholder='Enter Your Username']").type("123admin@").should("have.value","123admin@")
    cy.get("button[class='btn btn-default btn-login']").click()
    cy.url().should("include","/home")
})
And("Enterincorrect",()=>{
    cy.get("input[placeholder='Enter Your Username']").type("automation").should("have.value","automation")
    cy.get("input[placeholder='Enter Your Username']").type("123admsfd").should("have.value","123admsfd")
    cy.get("button[class='btn btn-default btn-login']").click()
    cy.get('.alert-message').should("contain","Error! Username / Password Incorrect")
    

})

