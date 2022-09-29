export class homepage {
   
    title(){
        cy.get('title:first-of-type').should("contain","eGWAP")
    }
    breadcrumb(){
        cy.get(".header__breadcrumb > h2").should("contain","Dashboard")
    }

}