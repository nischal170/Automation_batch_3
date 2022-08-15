export class jobelements{
    clickadd(){
        cy.get('#btnAdd').click()
    }
    filljobtitle(){
        cy.get('#jobTitle_jobTitle').type("Marketing Manager").should("have.value","Marketing Manager")
        cy.get('#jobTitle_jobDescription').type("THis is a very good job.").should("have.value","THis is a very good job.")
        cy.get('#jobTitle_jobSpec').attachFile('example.pdf');
        cy.get('#jobTitle_note').type("this is description of the job").should("have.value","this is description of the job")
        cy.get('#btnSave').click()
        cy.wait(500)
        cy.get('.message').should("contain", "Saved")
    }
}