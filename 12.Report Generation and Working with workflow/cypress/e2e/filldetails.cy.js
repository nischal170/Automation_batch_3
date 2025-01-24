import * as details from "../pageobject/productpageobj";

describe("Enter details",()=>{

    beforeEach(()=>{
        cy.login("automation","123admin@")
    })
    it("Fill details",()=>{
        cy.visit('/')
        details.filldetails()
        details.writedata()
        details.readdata()
        details.final()
       
    });
    
})