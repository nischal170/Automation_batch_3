import { products } from "../page/productsPage/productpage";
import { faker } from '@faker-js/faker';

const prod=new products()
export function filldetails(){
    prod.clickproducts()
    prod.addproductcategry() 
    prod.givetype()
    prod.givestatus()
}
export function writedata(){
    var datas={
        category:faker.word.adjective(),
        title:faker.word.adjective(),
        description:faker.lorem.paragraph(),
        position:faker.random.numeric(),
        icon:"icon.png",
        background:"background.jpg"
    }
    cy.writeFile('cypress/fixtures/datas.json',datas)
}
export function readdata(){
    cy.readFile('cypress/fixtures/datas.json').then(res=>{
        prod.giveCategory(res.category)
        prod.addimages(res.icon,res.background)
        prod.givetitle(res.title)
        prod.givedescription(res.description)
        prod.giveposition(res.position)
    });
}
export function final(){
    prod.submit()
    cy.wait(500)
    cy.get(".alert-message").should("contain","Successfully")
    
}
