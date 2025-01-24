import { selectfrommenu } from "../page/menuselect/menuselect";
const men=new selectfrommenu()
export function addtocarts(){
    men.clickmenu()
    men.clickdallemomoscat()
    men.getName()
    men.clickfirstitem()
    men.addtocart()
    men.clickdallemomoscat()
    men.clickseconditem()
    men.addtocart()
}
export function viewcart(){
    men.clickcart()
    men.checkcart()

}