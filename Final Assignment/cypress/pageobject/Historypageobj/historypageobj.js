import { historypage } from "../../page/Historypage";
const history=new historypage()
export function click_history(){
    history.clickhistory()
}
export function check_breadcrumb(){
    history.breadcrumb()
}
export function search_history(){
    cy.readFile('cypress/fixtures/transfer.json').then(res=>{
        var key_word=res.body.referenceCode  
    history.search(key_word)
    })
}
export function verify_reference(){
    cy.readFile('cypress/fixtures/transfer.json').then(res=>{
        var key_word=res.body.referenceCode
    history.verifyreference(key_word)})
}
export function verify_table(){
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
export function automate_type_filter_buy(){
    history.clicktype_filter()   
    cy.get(".rc-virtual-list-holder-inner div:nth-child(2)").click()
    cy.wait(1000)
    cy.get(".ant-table-tbody tr td:nth-child(3) div").each((element)=>{
        expect(element.text()).to.equal("Buy")
    })
}
export function automate_type_filter_sell(){
    history.clicktype_filter()
    cy.get(".rc-virtual-list-holder-inner div:nth-child(3)").click()
    cy.wait(1000)
    cy.get(".ant-table-tbody tr td:nth-child(3) div").each((element)=>{
        expect(element.text()).to.equal("Sell")
    })
}
export function automate_type_filter_send(){
    history.clicktype_filter()
    cy.get(".rc-virtual-list-holder-inner div:nth-child(4)").click()
    cy.wait(1000)
    cy.get(".ant-table-tbody tr td:nth-child(3) div").each((element)=>{
        expect(element.text()).to.equal("Send")
    })

}
export function automate_status_completed(){
    history.clickstatus_filter()
    cy.get(".rc-virtual-list-holder-inner div.ant-select-item-option:nth-child(2)").click({force:true})
    cy.wait(1000)
    cy.get(".ant-table-tbody tr td:nth-child(5) div").each((element)=>{
        expect(element.text()).to.equal("Completed")
    })  
}
export function automate_status_cancelled(){
    history.clickstatus_filter()
    cy.get(".rc-virtual-list-holder-inner div.ant-select-item-option:nth-child(3)").click({force:true})
    cy.wait(1000)
    cy.get(".ant-table-tbody tr td:nth-child(5) div").each((element)=>{
        expect(element.text()).to.equal("Cancelled")
    })
}
export function automate_status_failed(){
    history.clickstatus_filter()
    cy.get(".rc-virtual-list-holder-inner div.ant-select-item-option:nth-child(4)").click({force:true})
    cy.wait(1000)
    cy.get(".ant-table-tbody tr td:nth-child(5) div").each((element)=>{
        expect(element.text()).to.equal("Failed")
    })


}

export function select_date_from_to(){
    cy.get('.from .ant-picker-input input').click({force:true})
    cy.get("td[title='2022-09-01'] div[class='ant-picker-cell-inner']").should("be.visible").click({force:true})
    cy.wait(500)
    cy.get("input[placeholder='To']").click({force:true})
    cy.wait(500)
    cy.get(".ant-picker-dropdown-hidden td[title='2022-09-29'] div[class='ant-picker-cell-inner']").should('not.be.visible')
    cy.get("td[title='2022-09-29'] div[class='ant-picker-cell-inner']").filter(':visible').click()
    
}
export function find_transaction_between_dates(){
    cy.get('.from .ant-picker-input input').then((value1)=>{
        var from_date=value1.val()
        from_date=Date.parse(from_date)
        cy.get("input[placeholder='To']").then((value2)=>{
            var to_date=value2.val()
            to_date=Date.parse(to_date)
            cy.get(".ant-table-tbody tr td:nth-child(2) div").each((element)=>{
                var check_date=element.text()
                check_date=Date.parse(check_date)//The Date.parse() method parses a string representation of a date, and returns the number of milliseconds since January 1, 1970
                expect(check_date).to.be.within(from_date,to_date)
            })

        })
    })
    
    

}
