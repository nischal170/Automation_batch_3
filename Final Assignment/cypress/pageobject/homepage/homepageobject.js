import { homepage } from "../../page/homepage";
const home_page=new homepage()
export function verify_title(){
    home_page.title()
}
export function verify_breadcrumb(){
    home_page.breadcrumb()
}
//check available balance text and amount
export function available_balance(){
    cy.intercept('GET',Cypress.env("url")+"/users/profile").as("get_available_balance")
        cy.get("div[class='ant-card srdc'] h3").should("contain","Available Wallet Balance")
        cy.get("a[href='/']").click()
        cy.wait('@get_available_balance').should((res) => {
            expect(res.response.statusCode).to.equal(200)
            cy.get('.srdc .revenue-number h2').then(($span) => {
                const num1 = $span.text().replace(/,/g, "")
                expect(parseFloat(num1)).to.equal(res.response.body.availableBalance)
            })
        
    })  
}
//check current balance text and amount
export function current_balance(){
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