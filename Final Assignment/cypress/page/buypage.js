export class buypage{
    clickbuybutton(){
        cy.get(".buy .ant-card-body").click({force:true})
    }
    enterbuyvalue(coin){
        cy.get('#coin').type(coin).should("have.value",coin)
    }
    clicksubmit(){
        cy.get('.ant-form-item-control-input-content .ant-btn-primary').should("be.visible").click()
    }
    //this function clicks buy and verifies with the api the number of coins bought
    clickbuyegwap(coin){
        cy.intercept('POST',Cypress.env("url")+"/transactions/buy").as("get_buy_details")
        cy.get('.footer button > span').click()
        cy.wait('@get_buy_details').should((res) => {
            expect(res.response.statusCode).to.equal(200)//status code 200
            expect(coin).to.equal(res.response.body.amount)//verify with api amount of coins bought 
        })
        

        
    }
    //toast message success confirmation
    successfulbuy(){
        cy.get(".ant-notification-notice-content .ant-notification-notice-message").should("contain","Success")
      
        
    }

}