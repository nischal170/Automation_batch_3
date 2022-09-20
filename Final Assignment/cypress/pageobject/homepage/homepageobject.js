import { homepage } from "../../page/homepage";
const home_page=new homepage()
export function verify_title(){
    home_page.title()
}
export function verify_breadcrumb(){
    home_page.breadcrumb()
}
export function available_balance(){
    home_page.availablebalance()
}
export function current_balance(){
    home_page.currentbalance()
}