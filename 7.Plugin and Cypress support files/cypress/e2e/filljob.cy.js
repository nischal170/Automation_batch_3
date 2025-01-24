
import { jobfill } from "../pageobject/jobtitleobj/jobtitleobj";
import * as login from "../pageobject/loginpageobject/loginobject";

describe('Job title fill',()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        login.validlogin()

    })
    it('fill form',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/admin/viewJobTitleList')

        jobfill()

    });
   
    
})