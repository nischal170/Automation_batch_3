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
        var j=0
        var headers=['S.N','Reference code','Description','Action']
        cy.get('.ant-table-thead th.ant-table-cell').each((element)=>{
            i=i+1
            if (i==arr[j]){
                expect(headers[j]).to.equal(element.text())
                j=j+1


            }

        })
        var rem_headers=['Date','Type','Status']
        var m=0
        cy.get(".ant-table-thead th.ant-table-column-has-sorters .ant-table-column-title").each((element)=>{
            expect(rem_headers[m]).to.equal(element.text())
            m=m+1

        })
    }

}