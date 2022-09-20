export class homepage {
   
    title(){
        cy.get('title:first-of-type').should("contain","eGWAP")
    }
    breadcrumb(){
        cy.get(".header__breadcrumb > h2").should("contain","Dashboard")
    }
   
    availablebalance(){ 
        cy.intercept('GET',Cypress.env("url")+"/users/profile").as("get_available_balance")
        cy.get("div[class='ant-card srdc'] h3").should("contain","Available Wallet Balance")
        cy.get("a[href='/']").click()
        cy.wait('@get_available_balance').should((res) => {
           // expect(res.duration).to.be.lessThan(1000)
            expect(res.response.statusCode).to.equal(200)
            cy.get('.srdc .revenue-number h2').then(($span) => {
                const num1 = $span.text().replace(/,/g, "")
                expect(parseFloat(num1)).to.equal(res.response.body.availableBalance)
            })
        
    })     
    }

    currentbalance(){ 
        cy.intercept('GET',Cypress.env("url")+"/users/profile").as("get_current_balance")
        cy.get("div[class='ant-card matic'] h3").should("contain","Current Wallet Balance")
        cy.get("a[href='/']").click()
        cy.wait('@get_current_balance').should((res) => {
            expect(res.response.statusCode).to.equal(200)
            cy.get('.matic .revenue-number h2').then(($value) => {
                var number = $value.text().replace(/,/g, "")
                expect(parseFloat(number)).to.equal(res.response.body.ouroBalance)
            })
        
    })     
    }





}