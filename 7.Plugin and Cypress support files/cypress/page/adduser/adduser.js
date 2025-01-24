
export class useroperations{
    clickadduser(){
        cy.get('#btnAdd').click()
        cy.url().should('include',"/saveSystemUser")


    }
    forsearching(username){
        cy.get('#searchSystemUser_userName').type(username).should("have.value",username)
        cy.get('#searchBtn').click()
    }
    filluserdetail(username,Role,value,password){
        cy.get("#systemUser_userType").select(Role).should("have.value",value)
        cy.get("#systemUser_employeeName_empName").type("An{enter}")
        cy.get("#systemUser_userName").type(username).should("have.value",username)
        
        cy.get('#systemUser_status').select("Disabled").should("have.value",0)
        cy.get('#systemUser_password').type(password).should("have.value",password)
    
        cy.get('#systemUser_confirmPassword').type(password).should("have.value",password)
        

        

    }
    clicksave(){
        cy.get('#btnSave').click()
        cy.wait(500)
        //cy.get('.message.success.fadable').should("contains","Successfully Saved")
        cy.get('.message').should("contain", "Saved")
    }
    editingstatusearched(username){
        cy.contains(username).click()
        cy.get('#btnSave').click()
        cy.get('#systemUser_status').select("Enabled").should("have.value",1)
        cy.get('#btnSave').click()
        cy.wait(500)
        cy.get('.message').should("contain", "Updated")
    }
    deletesearched(){
        cy.get('#ohrmList_chkSelectAll').click()
        cy.get('#btnDelete').click()
        cy.get('#dialogDeleteBtn').click()
        cy.get('.message').should("contain", "Deleted")

    }
    
}