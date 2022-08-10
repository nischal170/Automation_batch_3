import * as loginpageobj from '../PageObject/loginpageobj'
describe('login',()=>{
    before(()=>{
        cy.visit('https://accounts.spotify.com/en/login')
    })
    it('',()=>{
        loginpageobj.loginObj()
    })
})