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
export function click_view_verify(){
    coin.clickviewverify()
}
export function click_modify(){
    coin.clickmodify()
}

export function type_update_and_verify_buy(){
    var coin_modified=Number(faker.datatype.number({min:50, max:500})) 
    coin.typemodify(coin_modified)
    coin.clickbuymodify()
    coin.clickupdateverify(coin_modified)
    coin.successfulmodify()
}
