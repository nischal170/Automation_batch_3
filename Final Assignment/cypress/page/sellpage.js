export class sellpage{
    clicksellbutton(){
        cy.get(".sell .ant-card-body").click({force:true})
    }
    entersellvalue(sell_amt){
        cy.get(".coins-sell #coin").click().type(sell_amt).should("have.value",sell_amt)
    }
    clickpreview_sell(){
        cy.get(".coins-sell button[type='submit']").click()
    }
    clicksellegwap(sell_amt){
        cy.intercept('POST',Cypress.env("url")+"/transactions/sell").as("get_sell_details")
        cy.get('.footer button > span').click()
        cy.wait('@get_sell_details').should((res) => {
            expect(res.response.statusCode).to.equal(200)//status code 200
            expect(sell_amt).to.equal(res.response.body.amount)//verify with api amount of coins sold 
        })

    }
    successfulsell_toast_message_verify(){
        cy.get(".ant-notification-notice-content .ant-notification-notice-message").should("contain","Success")
        cy.get(".ant-notification-notice-content .ant-notification-notice-description").then(($text) => {
            const num = $text.text().replace(/You've|successfully|sold|eGWAP./g, "")//removes ("You've successfully sold *** eGwap") from toast notification ,This helps to verify the number of coins.
            cy.get('@get_sell_details').should((res) => {

                 expect(parseFloat(num)).to.equal(res.response.body.amount)
            })
           
        })
    }

}