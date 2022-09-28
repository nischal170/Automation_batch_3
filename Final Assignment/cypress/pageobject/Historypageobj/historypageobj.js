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
/*export function automate_type_filter(){
    cy.get(".select-wrap>:nth-child(2)>.ant-select-selector input").click({force:true})
    cy.get(".select-wrap>:nth-child(2)>.ant-select-selector input").each((element)=>{

    }).as()

}*/
