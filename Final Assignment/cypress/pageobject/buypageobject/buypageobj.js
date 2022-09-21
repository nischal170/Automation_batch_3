import { buypage } from "../../page/buypage";
import { faker } from '@faker-js/faker';
const buy=new buypage()

export function buy_via_ui(){
    var buy_amount=Number(faker.datatype.number({min:50, max:500}))    
    buy.enterbuyvalue(buy_amount)
    buy.clicksubmit()
    buy.clickbuybutton()
    buy.clickbuyegwap(buy_amount)
    cy.wait(500)
    buy.successfulbuy()
    
}