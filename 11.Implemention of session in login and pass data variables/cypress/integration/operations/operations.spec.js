And("add {int} and {int}",(int1,int2)=>{
    cy.log("this is addition",int1+int2)
})
And("subtract {int} and {int}",(int1,int2)=>{
    cy.log("this is Subtraction",int1-int2)
})
And("Multiply {int} and {int}",(int1,int2)=>{
    cy.log("this is Multiplication ",int1*int2)
})
And("Divide {int} by {int}",(int1,int2)=>{
    cy.log("this is Division ",int1/int2)
})
And ('perform operations',(table)=>{
    table.hashes().forEach(no=>{
        cy.log(no.firstno+no.secondno)
        cy.log(no.firstno-no.secondno)
        cy.log(no.firstno*no.secondno)
        cy.log(no.firstno/no.secondno)
    
    });

})

And ('Enterdatas {int} and {int}',(int1,int2)=>{
    cy.log("add",int1+int2)
    cy.log("subtract",int1-int2)
    cy.log("multiply",int1*int2)
    cy.log("divide",int1/int2)
})