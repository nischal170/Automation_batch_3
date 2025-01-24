import { sellpage } from "../../page/sellpage";
import { faker } from '@faker-js/faker';
const sell=new sellpage()

export function sell_via_ui(){
    var sell_no=Number(faker.datatype.number({min:5, max:20}))    
    sell.clicksellbutton()
    sell.entersellvalue(sell_no)
    sell.clickpreview_sell()
    sell.clicksellegwap(sell_no)
    cy.wait(500)

}
export function verify_the_toast_message_sell_coins(){
    sell.successfulsell_toast_message_verify()

}
