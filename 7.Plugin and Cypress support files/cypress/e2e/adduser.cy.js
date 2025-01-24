
import * as operations from "../pageobject/adduserobj/adduser";
import * as login from "../pageobject/loginpageobject/loginobject";
describe("fill user details",()=>{
    beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    login.validlogin()
        
})
it('fill',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers')
    operations.fill_details()
    

});
it('search and set status',()=>{
   
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers')
    
    operations.searchandedit()
   


});
it('search and delete',()=>{
 
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers')
    operations.search_and_delete()


});

})