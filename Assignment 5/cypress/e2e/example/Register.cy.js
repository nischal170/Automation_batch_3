describe('Login',() =>{
    before(()=>{
        cy.visit('https://dev.suriname.codefirm.net/signup')
    });
    
    
    it('Register',()=>{
        cy.get('#firstName').type("Nischal").should("have.value","Nischal")
        cy.get('#lastName').type("Neupane").should("have.value","Neupane")
        cy.get('#email').type("nischalneupane17@gmail.com").should("have.value","nischalneupane17@gmail.com")
        //cy.get("#country").type("Nepal", { force: true })
        //cy.get("#country").click()
        //cy.get("div[class='ant-select ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-show-search'] div[class='ant-select-selector']").click()
        
        

        cy.get('#phone').type("9844724645").should("have.value","9844724645")
        cy.get('#password').type("nNNNNNNN1@").should("have.value","nNNNNNNN1@")
        cy.get('#confirmPassword').type("nNNNNNNN1@").should("have.value","nNNNNNNN1@")
        cy.get("#registerAct-checkbox").check({force: true})
        cy.get("button[type='submit']").click()
        cy.get("div[class='relative-box'] button:nth-child(1)").click({delay:1000})//copy pvt key
                
        //cy.get("button[class='ant-btn ant-btn-primary w__100']").click()
        
        cy.get("input[type='password']").type('{ctrl}{v}')


       
    });
    
});