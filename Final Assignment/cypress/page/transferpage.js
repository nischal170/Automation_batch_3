export class transferpage{
    clicktransferbutton(){
        cy.get(".transfer > .ant-card-body").click({force:true})
    }
    typetransferamount(transfer_amt){
        cy.get("#amount").click().type(transfer_amt).should("have.value",transfer_amt)
    }
    clear_transfer_page_input_field(selector){
        cy.get(selector).clear({force:true})
    }
    transfer_amt_input_verify(){
        cy.get("div.ant-form-item-explain-connected div:nth-child(1)").should("contain","Please enter eGWAP!")
    }
    receiver_input_verify(){
        cy.get("div[class='reciever-details'] div[role='alert']").should("contain","Phone, Email, or Public Address is required!")
    }
    typereceiver(receiver){
        cy.get("#receiver").type(receiver).should("have.value",receiver)
    }
    typenote(note){
        cy.get("#remarks").type(note).should("have.value",note)
    }
    clickpreview_transfer(){
        cy.get("button[type='submit']").should("be.visible").click()
    }
    clicktransferegwap(){
        cy.get(".message.text-center").should("contain","The Coin transfer will start processing immediately.")
        cy.intercept('POST',Cypress.env("url")+"/transactions/send").as("get_transfer_details")
        cy.get('.footer button > span').should("be.visible").click()
        cy.wait('@get_transfer_details')  
    }
    verify_transfer_with_api(transferamt,receiver,note){
        cy.get('@get_transfer_details').should((res) => {
            expect(res.response.statusCode).to.equal(200)//status code 200
            expect(res.response.body.receiver.email).to.equal(receiver)
            expect(transferamt).to.equal(res.response.body.amount)//verify with api amount of coins transferred
            expect(note).to.equal(res.response.body.remarks) 
       })
    }
    savetojson(){
        cy.get('@get_transfer_details').should((res) => {
            cy.writeFile('cypress/fixtures/transfer.json',res.response)
        })

    }
    email_invalid_assertion(){
        cy.get("div[role='alert']").should("contain","We didn't recognize the receiver. Are you sure the provided value is correct?")
    }
   
    successfulltransfer_toast_message(){
        cy.get(".ant-notification-notice-content .ant-notification-notice-message").should("contain","Success")
        cy.get(".ant-notification-notice-content .ant-notification-notice-description").then(($text) => {
            const num = $text.text().replace(/You've|successfully|sent|eGWAP./g, "")//removes ("You've successfully sent *** eGwap") from toast notification ,This helps to verify the number of coins.
            cy.get('@get_transfer_details').should((res) => {

                 expect(parseFloat(num)).to.equal(res.response.body.amount)
            })
           
        }) 
    }

}