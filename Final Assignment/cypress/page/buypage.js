export class buypage{

    clickcoin(){
        cy.get("a[href='/coins']").click()
        cy.url().should("contain","/coins")
    }
    breadcrumb(){
        cy.get(".breadcrumbs-header  h3").should("contain","Coins")
    }
    
    clickbuybutton(){
        cy.get(".buy .ant-card-body").click({force:true})
        cy.get("#rcDialogTitle0").should("contain","BUY")
    }
    enterbuyvalue(coin){
        cy.get('#coin').type(coin).should("have.value",coin)
    }
    clicksubmit(){
        cy.get('.ant-form-item-control-input-content .ant-btn-primary').should("be.visible").click()
    }
}