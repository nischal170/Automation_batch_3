import { products } from "../page/productsPage/productpage";
import { faker } from '@faker-js/faker';

const prod=new products()
export function filldetails(){
    prod.clickproducts()
    prod.addproductcategry()
    prod.giveCategory(faker.word.adjective())
    prod.givetitle(faker.word.adjective())
    prod.givedescription(faker.lorem.paragraph())
    prod.givetype()
    //prod.giveposition(faker.lorem.word(5))
    prod.givestatus()
    prod.submit()
}