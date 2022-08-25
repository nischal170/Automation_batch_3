import { writedata } from "../../pageobject/registerpageobj"

export class selectfrommenu{
    clickmenu(){
        cy.get('.btn.menu__btn.mx-0.ng-star-inserted').click()
        writedata(500)
    }
    
}