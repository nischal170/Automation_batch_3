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
    history.verifytableheaders()
}