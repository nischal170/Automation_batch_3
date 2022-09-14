describe('Verifying datas in UI Via assertions ',()=>{
    beforeEach(()=>{
                cy.Login_type()//Login by typing     
    });

    it("Checking title and Background photo",()=>{
        cy.visit(Cypress.env("url"))
        cy.readFile('cypress/fixtures/after-login/banner-landing.json').then(res=>{
            cy.wait(500)
            cy.get("h1[class='animated']").should("contain",res.data[0].title)
            cy.get("div.bg-img").should('have.css', 'background').and("include",res.data[0].bannerImage)
           })
    });


    it("Checking Testimonial Counts and data",()=>{
       cy.visit(Cypress.env("url"))
       var initial=0
       cy.readFile('cypress/fixtures/extra/testimonials.json').then(res=>{
        cy.get("swiper.d-lg-none .swiper-wrapper").children().should('have.length', res.meta.pagination.total)
        cy.get("swiper.d-lg-none .swiper-wrapper .profile__discription p.user__name").each(($element) => {
            cy.expect($element.text().trim()).to.eql(res.data[initial].name)
            initial=initial+1
        })
       })
      // cy.get("button.menu__btn.mx-0").should('be.visible')    
    });


    it("Checking Banners",()=>{
        cy.visit(Cypress.env("url")+"menu")
        cy.readFile('cypress/fixtures/after-login/home.json').then(res=>{
            cy.wait(500)
        var banners=res.data.banners
        var banners_count=banners.length //counts the no of banners received from api
         cy.get(".container h1").should('have.length',banners_count)
        var i=0
        cy.get(".container h1").each(items=>{
            var name_of_item=''
         name_of_item=items.text()
        expect(items.text().trim()).to.eql(res.data.banners[i].title)
        i=i+1
        })
    })   
    });

    it("Checking adBanners",()=>{
        cy.visit(Cypress.env("url")+"menu")
        cy.readFile('cypress/fixtures/after-login/home.json').then(res=>{
            cy.wait(500)
            //for adbanners
            var adbanners=res.data.adbanners//for counting the number of adbanners received from the api
            var size=adbanners.length

             cy.get("app-banner").find('img').should('have.length', size)
                     
     })
    });


     it("Checking appCategories",()=>{
        cy.visit(Cypress.env("url")+"menu")
        cy.readFile('cypress/fixtures/after-login/home.json').then(res=>{
            cy.wait(500)
             var appCategories=res.data.appCategories
             var app_count=appCategories.length
             var f=0
             cy.get(".best-sells-area .container .section-title__carousel h2").should('have.length',app_count)//error//api has given 3 datas but only 2 are there in ui
             cy.get(".best-sells-area .container .section-title__carousel h2").each(items=>{
                 var name_of_header=''
         
         name_of_header=items.text()
         expect(items.text().trim()).to.eql(res.data.appCategories[f].title)//INdexing Problem//can be solved by making it static// throws error( became dynamic) need to fix this issue
         f=f+1
             })
              
 
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

     it("Verify all categories",()=>{

        cy.visit(Cypress.env("url")+"/menu")
        cy.wait(5000)
        cy.readFile('cypress/fixtures/after-login/category.json').then(res=>{
            cy.wait(500)
            cy.get(".categorie-area .container swiper.d-lg-none .category-list .category-thumb a img").should("have.length",res.meta.pagination.count)
            var o=0
            cy.get('.categorie-area .container swiper.d-lg-none .category-list .desc-listcategoreis h4').each(items=>{
                var name=''
                
                name=items.text()
                expect(items.text().trim()).to.eql(res.data[o].title)//error in naming assertions because in Ui items are not ordered according to api data
                o=o+1
            })
           })
     });

  
     it("Verify items in cart",()=>{

        cy.visit(Cypress.env("url")+"cart")
        cy.wait(1000)
        cy.readFile('cypress/fixtures/after-login/cart.json').then(res=>{
            var cart_products=res.data.cartProducts
            var count=cart_products.length
            cy.wait(500)
            cy.get("tbody").children().should("have.length",count)
            //verify names
            var i=0
            cy.get("tbody .product-name a").each(items=>{
                var name_of_item=''
             name_of_item=items.text()
            expect(items.text().trim()).to.eql(res.data.cartProducts[i].product.title)
            i=i+1
            })
            //verify price each
            var j=0
            cy.get("tbody .product-price-cart span").each(items=>{
                var name_of_item=''
             name_of_item=items.text()
            expect(items.text().trim()).to.eql("NRS "+res.data.cartProducts[j].product.unitPrice[0].sellingPrice)
            j=j+1
            })
            //verify total each
            var k=0
            cy.get("tbody .product-subtotal span span ").each(items=>{
                var name_of_item=''
             name_of_item=items.text()
            expect(Number(items.text().trim())).to.eql(res.data.cartProducts[k].price)
            k=k+1
            })
            //verify grandtotal and others
            var g=0
            let pricing_from_json={
                "0":`${"NRS "+res.data.orderAmount}`,
                "1":`${"NRS "+res.data.serviceCharge}`,
                "2":`${"NRS "+res.data.taxAmount}`,
                "3":`${"NRS "+res.data.subTotal}`,
                "4":`${"NRS "+res.data.deliveryCharge}`
            }
            cy.get("h5 span").each(items=>{
                

                expect(items.text().trim()).to.eql(pricing_from_json[g])
                g=g+1
            })

            cy.get("h4[class='grand-totall-title'] span").should("have.text","NRS "+res.data.total)

           })
     });

     it("Check config",()=>{

        cy.visit(Cypress.env("url")+"cart")
        cy.wait(5000)
        cy.readFile('cypress/fixtures/after-login/config.json').then(res=>{
            cy.wait(500)
            cy.get("h4[class='grand-totall-title'] span").should("contain",res.data.currency)
            cy.get(".col-lg-6 > .location__select__wrapper > .select__inner > .ng-select > .ng-select-container > .ng-value-container > .ng-input").click()
            var p=0
            cy.get("div .ng-option-label").each(items=>{
                expect(items.text().trim()).to.eql(res.data.warehouse[p].title)
                p=p+1
            })
            cy.visit(Cypress.env("url")+"checkout")
            cy.wait(5000)
            cy.get(".Place-order > .w-100 > .login-btn").click()
            cy.get(".toast-message").should('contain',"NRS"+"."+res.data.minimumPrice)
            


            
            })
        
     });

    

    
})