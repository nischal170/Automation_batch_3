
import {Registration_for_second} from "../../pageObject/secondprojRegister/2registerpageobj";
describe('Register',()=>{
    beforeEach(()=>{
        cy.visit('https://phptravels.org/register.php')
    })
    it('Registration for second',()=>{
        Registration_for_second()

    });

})