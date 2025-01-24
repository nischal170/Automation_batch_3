describe('Dalle momos api when signed in',()=>{
    before(()=>{
        cy.task('checkfile_exists', 'cypress/fixtures/login.json').then((textOrNull) => { 
            if (textOrNull==null){
                cy.log("File doesn't Exist,Running Register Command ")
                cy.Register()
            }
            else
            {
                cy.log("File Exists Now logging In to get access tokens")
                cy.Login()
            }
        })  
    });

    it("Config",()=>{
        const token = Cypress.env('accesstoken');
        const authorization = `Bearer ${ token }`;
        const key=Cypress.env("apikey")
    
    const options={
        method: 'GET',
        url: 'config',

        headers: {
            'Api-Key':`${key}`,
            authorization,
            "Warehouse-Id":'1',
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/config.json',response.body)

        })   
        
    });
    it("show profile",()=>{
        const token = Cypress.env('accesstoken');
        const authorization = `Bearer ${ token }`;
        const key=Cypress.env("apikey")
    
    const options={
        method: 'GET',
        url: 'profile/show',
        
        headers: {
            'Api-Key':`${key}`,
            authorization,
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/profile.json',response.body)

        })
    });
    it("Category",()=>{
        const token = Cypress.env('accesstoken');
        const authorization = `Bearer ${ token }`;
        const key=Cypress.env("apikey")
    
    const options={
        method: 'GET',
        url: 'category',
        
        headers: {
            'Api-Key':`${key}`,
            authorization,
            "Warehouse-Id":'1'
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/category.json',response.body)

        })
    });
    
    it("Cart",()=>{
        const token = Cypress.env('accesstoken');
        const authorization = `Bearer ${ token }`;
        const key=Cypress.env("apikey")
    
    const options={
        method: 'GET',
        url: 'cart',
        
        headers: {
            'Api-Key':`${key}`,
            authorization,
            "Warehouse-Id":'1'
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/cart.json',response.body)
            Cypress.env('cart_no', response.body.data.cartNumber)

        })
    });
    it("favourite Products",()=>{
        const token = Cypress.env('accesstoken');
        const authorization = `Bearer ${ token }`;
        const key=Cypress.env("apikey")
    
    const options={
        method: 'GET',
        url: 'favourite/products',
        
        headers: {
            'Api-Key':`${key}`,
            authorization,
            
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/favourite-products.json',response.body)

        })
    });
    it("Banner?type=landing",()=>{
        const token = Cypress.env('accesstoken');
        const authorization = `Bearer ${ token }`;
        const key=Cypress.env("apikey")
    
    const options={
        method: 'GET',
        url: 'banner?type=landing',
        
        headers: {
            'Api-Key':`${key}`,
            authorization,
            "Warehouse-Id":'1',
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/banner-landing.json',response.body)

        })
    });
    it("Home",()=>{
        const token = Cypress.env('accesstoken');
        const authorization = `Bearer ${ token }`;
        const key=Cypress.env("apikey")
    
    const options={
        method: 'GET',
        url: 'home',
        
        
        headers: {
            'Api-Key':`${key}`,
            authorization,
            "Warehouse-Id":'1'
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/home.json',response.body)

        })
    });
    
    
    it("Favourite per page",()=>{
        const token = Cypress.env('accesstoken');
        const authorization = `Bearer ${ token }`;
        const key=Cypress.env("apikey")
        const cartno=Cypress.env("cart_no")
    
    const options={
        method: 'GET',
        url: 'favourite?perPage=20&page=1',
        
        headers: {
            'Api-Key':`${key}`,
            authorization,
            'Cart-Number':`${cartno}`,
            "Warehouse-Id":'1'
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/favourite-per-page.json',response.body)

        })
    });
    it("Products of signature",()=>{
        const token = Cypress.env('token');
     const authorization = `Bearer ${ token }`;
       const key=Cypress.env('apikey')
        cy.request({
            method: "GET",
            url :'product?categoryId=signature&allProduct=1&page=1',
            headers:
        {'Api-Key': key, authorization,"Warehouse-Id": '1'
    }
    }).then((response) => {
        
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(500)
            cy.writeFile('cypress/fixtures/after-login/signature_products.json',response.body)
            
        })
    });

    
    
    

    
})