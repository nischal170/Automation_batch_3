describe('Dalle momos api when signed in',()=>{
    before(()=>{
        cy.readFile('cypress/fixtures/login.json').then(res=>{
            cy.request("POST",'auth/login',{"client_id": "2",
    "client_secret": "olzBb6we0po4B0PSJyDpNGhhSsnvZmeio8sRoASa",
    "grant_type": "password",
    "password": res.password,
    "provider": "",
    "refresh_token": "",
    "scope": "",
    "username": res.email }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.duration).to.be.lessThan(1000)
        cy.writeFile('cypress/fixtures/logintokensresponse.json',response.body)
        Cypress.env('accesstoken', response.body.access_token)
   
                    })
        

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
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/category.json',response.body)

        })
    });
    /*ASKS CITY
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
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/cart.json',response.body)

        })
    });*/
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
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/home.json',response.body)

        })
    });
    /* ASKS City
    it("Cart Product",()=>{
        const token = Cypress.env('accesstoken');
        const authorization = `Bearer ${ token }`;
        const key=Cypress.env("apikey")
    
    const options={
        method: 'POST',
        url: 'cart-product',
        body:{"note": "",
        "priceId": 1755,
        "productId": 1755,
        "quantity": 1

        },
        
        headers: {
            'Api-Key':`${key}`,
            authorization,
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/cart-product.json',response.body)

        })
    });*/

    /*ASKS FOR CITY
    it("related",()=>{
        const token = Cypress.env('accesstoken');
        const authorization = `Bearer ${ token }`;
        const key=Cypress.env("apikey")
    
    const options={
        method: 'GET',
        url: 'product/1737/related',
        
        headers: {
            'Api-Key':`${key}`,
            authorization,
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/related-products.json',response.body)

        })
    });*/
    /*it("Favourite per page",()=>{
        const token = Cypress.env('accesstoken');
        const authorization = `Bearer ${ token }`;
        const key=Cypress.env("apikey")
    
    const options={
        method: 'GET',
        url: 'favourite?perPage=20&page=1',
        
        headers: {
            'Api-Key':`${key}`,
            authorization,
          }
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            cy.writeFile('cypress/fixtures/after-login/favourite-per-page.json',response.body)

        })
    });*/

    
    
    

    
})