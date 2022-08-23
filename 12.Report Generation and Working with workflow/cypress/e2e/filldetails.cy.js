import { validlogin,invalidLogin } from "../pageobject/loginpageobject";
import { filldetails } from "../pageobject/productpageobj";

describe("Enter details",()=>{

    beforeEach(()=>{
        cy.visit("https://koklassv4-orderingdev-ms.ekbana.net/system/login")
        validlogin("automation","123admin@")
    })
    it("Fill details",()=>{
        filldetails()
       
    });
})