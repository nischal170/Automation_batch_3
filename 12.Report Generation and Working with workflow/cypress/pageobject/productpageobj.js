import { products } from "../page/productsPage/productpage";
import { faker } from '@faker-js/faker';

var datas={
    category:faker.word.adjective(),
    title:faker.word.adjective(),
    description:faker.lorem.paragraph(),
    position:faker.random.numeric(),
    icon:"icon.png",
    background:"background.jpg"
}

const prod=new products()
export function filldetails(){
    cy.writeFile('cypress/fixtures/datas.json',datas)
    cy.readFile('cypress/fixtures/datas.json').then(res=>{
        cy.log(res)
    });
    prod.clickproducts()
    prod.addproductcategry() 
    cy.writeFile('cypress/fixtures/datas.json',datas)
    cy.readFile('cypress/fixtures/datas.json').then(res=>{
        cy.log(res)
    });

    prod.giveCategory(datas.category)
    prod.addimages(datas.icon,datas.background)
    prod.givetitle(datas.title)
    prod.givedescription(datas.description)
    prod.givetype()
    prod.giveposition(datas.position)
    prod.givestatus()
    prod.submit()
    cy.wait(500)
    cy.get(".alert-message").should("contain","Successfully")
    cy.writeFile('cypress/fixtures/datas.json',datas)
    cy.readFile('cypress/fixtures/datas.json').then(res=>{
        cy.log(res)
    });
   //reading file
    
}