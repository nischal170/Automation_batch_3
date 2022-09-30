import { coinpage } from "../../page/coinpage"
import { faker } from '@faker-js/faker';
const coin=new coinpage()
export function click_coin_page_button(){
    coin.click_on_coins()
}
export function check_bread_crumb(){
    coin.breadcrumb()
}
export function click_buy(){
    coin.clickbuy()

}
export function click_sell(){
    coin.clicksell()
}
export function click_transfer(){
    coin.clicktransfer()
}
export function click_view(){
    coin.clickview()
}
export function verify_viewpage_with_api(identifier){//identifier(any variable) is used  as argument to pass alias from it block
    //here @get_buy_details and @get_sell_details are the two possible value of "identifier" which is passed from "it" block, they are used as variables to store response from buypage and sellpage
    var fees=[]//empty array to store payout total and transaction fee
    cy.get(identifier).then((resp)=>{
        cy.get(".custom-table th:nth-child(2)").should("contain",resp.response.body.referenceCode)//verify reference code
        fees[0]=resp.response.body.payoutTotal    //store payout total and transaction fee
        fees[1]=resp.response.body.transactionFee
    cy.get(".srdc-point span:nth-child(2)").then(($ele)=>{
        var coin=$ele.text().replace(/[+]|[-]|eGWAP/g,"")//removing + for buy and - for sell and eGWAP form text
        expect(parseFloat(coin)).to.equal(resp.response.body.amount)//verify coin amount 
    })
    var i=0
    cy.get(".custom-table tbody tr:nth-child(6)> td:nth-child(2)").each(($element)=>{
        var price=$element.text().replace(/[$]|USD/g,"")// removing $ and USD from text
        price=parseFloat(price)
        expect(price).to.equal(fees[i])//verifies payout total and transaction fee in a loop
        i=i+1   
    })

    })  
}
export function click_modify(){
    coin.clickmodify()
}
export function click_modify_for_sell(){
    coin.select_modify_for_sell()
}
export function verify_table_headers(){
    var array=[1,3,8]
        var headers=['S.N','Reference code','Action']
        var i=0
        var j=0
        cy.get('.ant-table-thead .ant-table-cell').each((element)=>{
            i=i+1
            if (i==array[j]){
                expect(headers[j]).to.equal(element.text())
                j=j+1 }
        })
        var rem_headers=['Date','Type','Quantity','Total','Status']
        var m=0
        cy.get(".ant-table-thead th.ant-table-column-has-sorters .ant-table-column-title").each((element)=>{
            expect(rem_headers[m]).to.equal(element.text())
            m=m+1

        })
}

export function type_update_and_verify(type){
    var coin_modified=Number(faker.datatype.number({min:5, max:30})) 
    coin.typemodify(coin_modified)
    if(type=='buy'){
        coin.clickmodify_for_buy()//run this function if it is called from "buy" "it" block
    }
    else{
        coin.clickmodify_for_sell()//run this function if it is called from "sell" "it" block
    }
    coin.clickupdateverify(coin_modified)//veries with the ui if entered coin value and modified coin value match or not
    coin.successfully_modified_toast()//verifies successful toast message with number of coins with ui
}
