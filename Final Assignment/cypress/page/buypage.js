export class buypage{
    enterbuyvalue(coin){
        cy.get('#coin').type(coin).should("have.value",coin)
    }
    clickpreview_buy(){
        cy.get('.ant-form-item-control-input-content .ant-btn-primary').should("be.visible").click()
        cy.get("div[class='coins-buy-wrapper'] p:nth-child(1)").should("contain","Your next step is to transfer the Total to the eGWAP account.")
    }
    //this function clicks buy and verifies with the api the number of coins bought
    clickbuyegwap(coin){
        cy.intercept('POST',Cypress.env("url")+"/transactions/buy").as("get_buy_details")
        cy.get('.footer button > span').should("be.visible").click()
        cy.wait('@get_buy_details').should((res) => {
            expect(res.response.statusCode).to.equal(200)//status code 200
            expect(coin).to.equal(res.response.body.amount)//verify with api amount of coins bought 
        })
        

        
    }
    //toast message success confirmation
    successfulbuy_toast_message_verify(){
        cy.get(".ant-notification-notice-content .ant-notification-notice-message").should("contain","Success")
        cy.get(".ant-notification-notice-content .ant-notification-notice-description").then(($text) => {
            const num = $text.text().replace(/You've|successfully|bought|eGWAP./g, "")//removes ("You've successfully bought *** eGwap") from toast notification ,This helps to verify the number of coins.
            cy.get('@get_buy_details').should((res) => {

                 expect(parseFloat(num)).to.equal(res.response.body.amount)
            })
           
        })

      
        
    }

}