import { sellpage } from "../../page/sellpage";
import { faker } from '@faker-js/faker';
const sell=new sellpage()

export function sell_via_ui(){
    var sell_no=Number(faker.datatype.number({min:5, max:20}))    
    sell.clicksellbutton()
    sell.typesell(sell_no)
    sell.clicksubmit()
    sell.clicksellegwap(sell_no)
    cy.wait(500)
    sell.successfullsell()

}
