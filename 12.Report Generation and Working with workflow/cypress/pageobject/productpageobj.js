import { products } from "../page/productsPage/productpage";
import { faker } from '@faker-js/faker';

var datas={
    category:faker.word.adjective(),
    title:faker.word.adjective(),
    description:faker.lorem.paragraph(),
    position:faker.random.numeric()
}

const prod=new products()
export function filldetails(){
    prod.clickproducts()
    prod.addproductcategry()
    prod.giveCategory(datas.category)
    prod.givetitle(datas.title)
    prod.givedescription(datas.description)
    prod.givetype()
    prod.giveposition(datas.position)
    prod.givestatus()
    prod.submit()
}