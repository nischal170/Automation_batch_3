
Given ("Url Visit",()=>{
    cy.visit("https://koklassv4-orderingdev-ms.ekbana.net/system/login")
})
And ('inputvaliddata',(table)=>{
    table.hashes().forEach(element=>{
        cy.session([element.username,element.password],()=>{
            cy.visit("https://koklassv4-orderingdev-ms.ekbana.net/system/login")
            cy.get("input[placeholder='Enter Your Username']").type(element.username).should("have.value",element.username)
            cy.get("input[placeholder='Enter your Password']").type(element.password).should("have.value",element.password)
            cy.get("button[class='btn btn-default btn-login']").click()
            cy.url().should('include',"system/home")
    
        })
        cy.visit("https://koklassv4-orderingdev-ms.ekbana.net/system/login")
        

    });
})

And ('input dataa {string} and {string}',(username,password)=>{
    cy.session([username,password],()=>{
        cy.visit("https://koklassv4-orderingdev-ms.ekbana.net/system/login")
        cy.get("input[placeholder='Enter Your Username']").type(username).should("have.value",username)
        cy.get("input[placeholder='Enter your Password']").type(password).should("have.value",password)
        cy.get("button[class='btn btn-default btn-login']").click()

    })
    cy.visit("https://koklassv4-orderingdev-ms.ekbana.net/system/login")


})

And ('inputinvaliddata',(table)=>{
    table.hashes().forEach(element=>{
        cy.session([element.username,element.password],()=>{
            cy.visit("https://koklassv4-orderingdev-ms.ekbana.net/system/login")
            cy.get("input[placeholder='Enter Your Username']").type(element.username).should("have.value",element.username)
            cy.get("input[placeholder='Enter your Password']").type(element.password).should("have.value",element.password)
            cy.get("button[class='btn btn-default btn-login']").click()
            cy.get('.alert-message').should("contain","Error! Username / Password Incorrect")
    
        })
        cy.visit("https://koklassv4-orderingdev-ms.ekbana.net/system/login")
        

    });
})

