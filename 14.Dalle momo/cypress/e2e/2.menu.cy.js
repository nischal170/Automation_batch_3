
import * as menu from '../pageobject/menuobj';
describe("Enter registration Data",()=>{ 
    beforeEach(()=>{
        cy.readFile('cypress/fixtures/details.json').then(res=>{
            const email=res.email
            const password=res.password
            cy.login(email,password)
         }) 
        
    })
    it('Add items to cart',()=>{
        cy.visit("/")
        menu.addtocarts()
        cy.visit('/menu')
        menu.viewcart() 

       
    });

})