import { coinpage } from "../../page/coinpage"
import { faker } from '@faker-js/faker';
const coin=new coinpage()
export function coin_page_button(){
    coin.goto_coin_page_button()
}
export function bread_crumb(){
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
export function click_view_verify(identifier){//identifier(any variable) is used  as argument to pass alias from it block
    coin.clickviewverify(identifier)
}
export function click_modify(){
    coin.clickmodify()
}
export function click_modify_for_sell(){
    coin.select_modify_for_sell()
}

export function type_update_and_verify(type){
    var coin_modified=Number(faker.datatype.number({min:50, max:500})) 
    coin.typemodify(coin_modified)
    if(type=='buy'){
        coin.clickbuymodify()//run this function if it is called from "buy" it block
    }
    else{
        coin.clicksellmodify()//run this function if it is called from "sell" it block
    }
    coin.clickupdateverify(coin_modified)//veries with the ui if entered coin value and modified coin value match or not
    coin.successfulmodify()//verifies successful toast message with number of coins with ui
}
