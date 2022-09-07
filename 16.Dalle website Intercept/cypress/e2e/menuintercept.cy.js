describe('API Intercept of Dalle momos website',()=>{
    before(()=>{
        cy.visit('/')
        

    });
    it("Intercept the menu page",()=>{
        
        
       cy.intercept('GET','api/v4/category',{fixture:"categories.json"}).as("category_intercept")
       cy.get('button.menu__btn.mx-0').click({force:true})
       cy.wait("@category_intercept")
       cy.url().should("contain","/menu")


    });
    it("Intercept the Categories items",()=>{
    
        cy.intercept('GET','api/v4/product?categoryId=dalle-momos&allProduct=1&page=1',{fixture:"items.json"}).as("items")
         cy.wait(1000)
         cy.get(".main-navigation .text-uppercase .menu-dropdown a[href='/category/dalle-momos']").click()
         cy.wait("@items")
         cy.url().should("contain","/category/dalle-momos")
  
  
      });
   
    })