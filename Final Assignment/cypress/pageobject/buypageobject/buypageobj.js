import { buypage } from "../../page/buypage";
import { faker } from '@faker-js/faker';
const buy=new buypage()

export function buy_via_ui(){
    var buy_amount=Number(faker.datatype.number({min:50, max:500}))    
    buy.enterbuyvalue(buy_amount)
    buy.clickpreview_buy()
    buy.clickbuyegwap(buy_amount)
    cy.wait(500)  
}
export function verify_the_toast_message_buy_coins(){
    buy.successfulbuy_toast_message_verify()

}