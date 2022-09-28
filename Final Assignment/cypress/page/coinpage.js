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
        cy.get("#coin").clear()
        cy.get('#coin').type(coin).should("have.value",coin)
    }
    clickbuymodify(){
        cy.get(".ant-form-item-control-input-content button.ant-btn").click()
    }
    clicksellmodify(){
        cy.get(".coins-modal-body button").click()
    }
    select_modify_for_sell(){
        cy.get("[data-row-key='1'] button.ant-btn-icon-only").click({force:true})
        cy.wait(500)
        cy.get(".ant-dropdown-menu-root li:nth-child(1)").click()
    }
    clickupdateverify(coin){
        cy.intercept('PATCH',"**/modify").as("get_modify_details")
        cy.get('.footer .ant-btn').click()
        cy.wait('@get_modify_details').should((res) => {
            expect(res.response.statusCode).to.equal(200)//verify status code of api
            expect(coin).to.equal(res.response.body.amount)
        })
    }
    successfulmodify(){
        cy.get(".ant-notification-notice-content .ant-notification-notice-message").should("contain","Success")//Success message assertion
        cy.get(".ant-notification-notice-content .ant-notification-notice-description").then(($text) => {
                const num = $text.text().replace(/You've|successfully|updated|eGWAP./g, "")//removes ("You've successfully updated *** eGwap") from toast notification ,This helps to verify the number of coins.
                cy.get('@get_modify_details').should((res) => {
    
                     expect(parseFloat(num)).to.equal(res.response.body.amount)
                })
               
            })
    }

}