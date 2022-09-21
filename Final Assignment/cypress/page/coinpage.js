export class coinpage{
    goto_coin_page_button(){
        cy.get("a[href='/coins']").click()
        cy.url().should("contain","/coins")
    }
    breadcrumb(){
        cy.get(".breadcrumbs-header  h3").should("contain","Coins")
    }
    clickbuy(){
        cy.get(".buy .ant-card-body").click({force:true})
    }
    clicksell(){
        cy.get(".sell .ant-card-body").click({force:true})
    }
    clicktransfer(){
        cy.get(".transfer .ant-card-body").click({force:true})
    }
    clickview(){
        cy.get("[data-row-key='1'] .ant-btn span").click()   
    }
    clickmodify(){
        cy.get("[data-row-key='1'] button.ant-btn-icon-only").click({force:true})
        cy.wait(500)
        cy.get(".ant-dropdown-menu-root li:nth-child(2)").click()
    }
    typemodify(coin){
        cy.get("#coin").click().type('{backspace},{backspace},{backspace}')
        cy.get('#coin').type(coin).should("have.value",coin)
    }
    clickbuymodify(){
        cy.get(".ant-form-item-control-input-content button.ant-btn").click()
    }
    clickupdateverify(coin){
        cy.intercept('PATCH',"**/modify").as("get_modify_details")
        cy.get('.footer .ant-btn').click()
        cy.wait('@get_modify_details').should((res) => {
            expect(res.response.statusCode).to.equal(200)
            expect(coin).to.equal(res.response.body.amount)
        })
    }
    successfulmodify(){
        cy.get(".ant-notification-notice-content .ant-notification-notice-message").should("contain","Success")
        cy.get(".ant-notification-notice-content .ant-notification-notice-description").then(($text) => {
                const num = $text.text().replace(/You've|successfully|updated|eGWAP./g, "")
                cy.get('@get_modify_details').should((res) => {
    
                     expect(parseFloat(num)).to.equal(res.response.body.amount)
                })
               
            })

    }

    clickviewverify(){
        //here get_buy_details is used ad variables to store resp from buypage
        var fees=[]//empty array to store payout total and transaction fee
        cy.get('@get_buy_details').then((resp)=>{
            cy.get(".custom-table th:nth-child(2)").should("contain",resp.response.body.referenceCode)//verify reference code
            fees[0]=resp.response.body.payoutTotal
            fees[1]=resp.response.body.transactionFee
        cy.get(".srdc-point span:nth-child(2)").then(($ele)=>{
            var coin=$ele.text().replace(/[+]|eGWAP/g,"")//removing + and eGWAP form text
            expect(parseFloat(coin)).to.equal(resp.response.body.amount)//verify coin amount 
        })
        var i=0
        cy.get(".custom-table tbody tr:nth-child(6)> td:nth-child(2)").each(($element)=>{
            var price=$element.text().replace(/[$]|USD/g,"")// removing $ and USD from text
            price=parseFloat(price)
            expect(price).to.equal(fees[i])//verifies payout total and transaction fee in a loop
            i=i+1   
        })

        })
        
        
        
        

    }

}