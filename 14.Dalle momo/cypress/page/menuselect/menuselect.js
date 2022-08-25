import { writedata } from "../../pageobject/registerpageobj"

export class selectfrommenu{
    constructor(){
        this.itemsobj={
            firstitem:'',
            seconditem:''
        }
    } 
    clickmenu(){
        cy.get('.btn.menu__btn.mx-0').click({force:true})
        writedata(500)
    }
    clickdallemomoscat(){
        //cy.get("span.number_product+a[href='/category/dalle-momos']").click({multiple:true},{force:true})
        cy.visit('https://uat.ordering-dalle.ekbana.net/category/dalle-momos')
    }
    getName(){
        
        cy.get(".product-link[href='/product/chicken-biryani']").then(($cont)=>{
            this.itemsobj.firstitem=$cont.text()
        })
       cy.get(".product-link[href='/product/pan-fried-momos-with-chillies']").then(($cont)=>{
        this.itemsobj.seconditem=$cont.text()
                })
        
        cy.writeFile('cypress/fixtures/itemnames.json',this.itemsobj)
    }
    clickfirstitem(){
        cy.get(".product-link[href='/product/chicken-biryani']").click()


    }
    clickseconditem(){
        cy.get(".product-link[href='/product/pan-fried-momos-with-chillies']").click()
       

    }
    addtocart(){
        cy.get(".pro-details-cart.btn-hover>button").click()

    }
    clickcart(){
        cy.get(".col-md-10 > .header_account_area > .cart-info > .mini-cart-warp > .cart__link__header > #Capa_1").click({force:true})
    }
    checkcart(){
        cy.get("tbody .product-name").each(($element)=>{
            cy.log($element)
            cy.wrap($element.text()).should("include.text",this.itemsobj.firstitem)
            //cy.wrap($element.text()).should("contain",this.itemsobj.seconditem)
        })
    }

    }

