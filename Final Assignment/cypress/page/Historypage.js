export class historypage{
    clickhistory(){
        cy.get('a[href="/history"]').click()
        cy.url().should("include","/history")
    }
    breadcrumb(){
        cy.get(".history .breadcrumbs-header h3").should("contain","Transaction History")
    }
    search(keyword){
        cy.get("input[placeholder='Search Description']").type(keyword).should("have.value",keyword)
        cy.get("input[placeholder='Search Description']").type('{enter}')

    }
    verifyreference_code(reference){
        cy.get('.ant-table-tbody tr[data-row-key="1"] .quantity span').then((Element)=>{
            var text=Element.text()
            expect(text).to.equal(reference)
        })
    }
    clickstatus_filter(){
        cy.get(".select-wrap>:nth-child(3)>.ant-select-selector input").click({force:true})

    }
    clicktype_filter(){
        cy.get(".select-wrap>:nth-child(2)>.ant-select-selector input").click({force:true})
    }
}