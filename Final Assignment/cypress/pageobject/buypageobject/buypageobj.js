import { buypage } from "../../page/buypage";
const buy=new buypage()
export function verify(){
    buy.clickcoin()
    buy.breadcrumb()
    buy.clickcoin()
}
export function buy_via_ui(){
    
    buy.clickbuybutton()
    buy.enterbuyvalue(100)
    buy.clicksubmit()
}