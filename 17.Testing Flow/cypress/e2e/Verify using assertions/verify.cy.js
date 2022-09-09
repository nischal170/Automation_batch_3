describe('Verifying datas in UI Via assertions ',()=>{
    beforeEach(()=>{
        
    
                cy.Login_type()//Login by typing
          
    });

    it("homepage",()=>{
       cy.visit(Cypress.env("url"))
       cy.readFile('cypress/fixtures/after-login/banner-landing.json').then(res=>{
        cy.wait(500)
        cy.get("h1[class='animated']").should("contain",res.data[3].title)
       })//checking apple title
       var initial=0
       cy.readFile('cypress/fixtures/extra/testimonials.json').then(res=>{

        cy.get("swiper.d-lg-none .swiper-wrapper").children().should('have.length', res.meta.pagination.total)
       
        cy.get("swiper.d-lg-none .swiper-wrapper .profile__discription p.user__name").each(($element) => {
            
            cy.expect($element.text().trim()).to.eql(res.data[initial].name)
            initial=initial+1

        })
       })//checking testimonials

      
        
    });
    it("Menu Page",()=>{
        cy.visit(Cypress.env("url")+"menu")
        cy.readFile('cypress/fixtures/after-login/category.json').then(res=>{
            cy.wait(500)
            //cy.get("").children()
            //.swiper-wrapper .category-list .category-thumb a img --find all 14 items
           })
           cy.readFile('cypress/fixtures/after-login/home.json').then(res=>{
            cy.wait(500)
            /*cy.get(".slider-height-6>.container h1 ").then(items => {
                expect(items).to.have.length(res.meta.pagination.count);

            })*/
            
           })
       
         
     });
     it("Category signature",()=>{
        cy.visit(Cypress.env("url")+"category/signature")
        cy.wait(5000)
        cy.readFile('cypress/fixtures/after-login/signature_products.json').then(res=>{
            cy.get('.tab-pane>.row>').find('article').then(items => {
    expect(items).to.have.length(res.meta.pagination.count);
    var i=0
    cy.get('app-product-grid > .list-product > .product-decs h2 .product-link').each(items=>{
        var name=''
        
        name=items.text()
        expect(items.text().trim()).to.eql(res.data[i].title)
        i=i+1
    })
  });   }) 


     });

    
    
    

    
})