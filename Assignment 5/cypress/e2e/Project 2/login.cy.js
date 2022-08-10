describe('Register',() =>{
    before(()=>{
        cy.visit('https://phptravels.org/register.php')
    });
    
    
    it('Register',()=>{
        cy.get('#inputFirstName').type("Nischal").should("have.value","Nischal")
        cy.get('#inputLastName').type("Neupane").should("have.value","Neupane")
        cy.get('#inputCompanyName').type("apple Inc.").should("have.value","apple Inc.")
       // cy.get(".selected-dial-code").select("+977").should("have.value","")
       cy.get('#inputEmail').type("gfg@gmail.com").should("have.value","gfg@gmail.com") 
        cy.get("#inputPhone").type("989898988").should("have.value","989898988")
        

        cy.get('#inputAddress1').type("dgfdg,fgfgfg").should("have.value","dgfdg,fgfgfg")
        cy.get('#inputAddress2').type("dgfdg,fgfgfg").should("have.value","dgfdg,fgfgfg")

        cy.get('#inputCity').type("ktjg").should("have.value","ktjg")
        cy.get('#stateinput').type("newyork").should("have.value","newyork")
        //cy.get("#registerAct-checkbox").check({force: true})
        cy.get("#inputPostcode").type("4400").should("have.value","4400")
        cy.get("#inputCountry").select("Nepal").should("have.value","NP")
        cy.get("#customfield2").type("989898988").should("have.value","989898988")
        cy.get("#inputNewPassword1").type("nNNNNN12@.#").should("have.value","nNNNNN12@.#")
        cy.get("#inputNewPassword2").type("nNNNNN12@.#").should("have.value","nNNNNN12@.#")
        //cy.get("input[value='0']").click()//captcha
        cy.get("input[value='Register']").click()



        




       
    });
    
});