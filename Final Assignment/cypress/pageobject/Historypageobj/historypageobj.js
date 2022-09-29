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
