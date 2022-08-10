describe('Login',() =>{
    
    before(()=>{
        cy.visit('https://dev.suriname.codefirm.net/login')
    });
    
    
    it('Loginsuccess',()=>{
        cy.get('#username').type("itihas.adhikari@ekbana.info").should("have.value","itihas.adhikari@ekbana.info")
        cy.get('#password').type("Itihas@123").should("have.value","Itihas@123")
        cy.get("button[type='submit']").click()
        cy.get('#otp').type("ae7Dpa").should("have.value","ae7Dpa")
        cy.get("div[class='ant-row ant-form-item'] button[type='submit']").click({delay:100000})
        cy.get("div[class='header__breadcrumb'] h2").should("contain","Dashboard")
    });
    
    it('LoginFailed when wrong password',()=>{
        cy.get('#username').type("itihas.adhikari@ekbana.info").should("have.value","itihas.adhikari@ekbana.info")
        cy.get('#password').type("2347634hdg").should("have.value","2347634hdg")
        cy.get("button[type='submit']").click()
    });

});