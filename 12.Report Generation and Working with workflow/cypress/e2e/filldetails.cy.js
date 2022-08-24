import { filldetails } from "../pageobject/productpageobj";

describe("Enter details",()=>{

    beforeEach(()=>{
        cy.login("automation","123admin@")
    })
    it("Fill details",()=>{
        cy.visit('/')
        filldetails()
       
    });
    
})