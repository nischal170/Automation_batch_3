//baseurl="https://dev.surinamefe.codefirm.net/api/"
describe('Egwap API testing',()=>{

    beforeEach(()=>{
        cy.login();
        cy.OTP();
    });

    it("Profile",()=>{
        const token = Cypress.env('token');
        const authorization = `Bearer ${ token }`;
        const options={
            method:"GET",
            url:"users/profile",
            
        headers: {
            authorization,
          }
            };
            cy.request(options).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lessThan(1000)
                expect(response.body.email).to.eq("itihas.adhikari@ekbana.info")

        })
    });
    it("Buy",()=>{
        const token = Cypress.env('token');
        const authorization = `Bearer ${ token }`;
    
    const options={
        method: 'POST',
        url: 'transactions/buy',
        body:{"amount": 100,
        "remarks": "buy remarks"},
        
        headers: {
            authorization,
          }};
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            expect(response.body.amount).to.be.a("Number")


        })
    });

    it("Sell",()=>{
        const token = Cypress.env('token');
        const authorization = `Bearer ${ token }`;
    
    const options={
        method: 'POST',
        url: 'transactions/sell',
        body:{"amount": 1,"remarks": "withdraw remarks"},
        
        headers: {
            authorization,
          }};
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            expect(response.body.amount).to.be.a("Number")


        })
    });
 
    
    
    
});