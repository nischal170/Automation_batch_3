export class historypage{
    clickhistory(){
        cy.get('a[href="/history"]').click()
    }
    breadcrumb(){
        cy.get(".history .breadcrumbs-header h3").should("contain","Transaction History")
    }
    search(keyword){
        cy.get("input[placeholder='Search Description']").type(keyword).should("have.value",keyword)
        cy.get("input[placeholder='Search Description']").type('{enter}')

    }
    verifyreference(reference){
        cy.get('.ant-table-tbody tr[data-row-key="1"] .quantity span').then((Element)=>{
            var text=Element.text()
            expect(text).to.equal(reference)
        })
    }
    verifytableheaders(){
        var arr=[1,4,6,7]
        var i=0
        cy.get('.ant-table-thead th.ant-table-cell').each((element)=>{
            i=i+1
            j=j+1
            if (i==arr[j]){
                

            }

        })
    }

}