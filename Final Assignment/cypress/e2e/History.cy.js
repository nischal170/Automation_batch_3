
import * as historypageobj from "../pageobject/Historypageobj/historypageobj";
describe('History Actions',()=>{
    beforeEach('login',()=>{
        //cy.login_via_api(Cypress.env("email"),Cypress.env("password"),Cypress.env("otp"))
        cy.Login(Cypress.env("email"),Cypress.env("password"),Cypress.env("otp"))
        
        cy.visit('/')
    })
    it('Verify Breadcrumb',()=>{
        historypageobj.click_history()
        historypageobj.check_breadcrumb()
    })
    it('Verify Table headers',()=>{
        historypageobj.click_history()
        historypageobj.verify_table_headers()
    });
    it('automate type filter',()=>{
        historypageobj.click_history()
        historypageobj.automate_type_filter_buy()
        historypageobj.automate_type_filter_sell()
        historypageobj.automate_type_filter_send()

    })
    it('automate status filter',()=>{
        historypageobj.click_history()
        historypageobj.automate_status_completed()
        historypageobj.automate_status_cancelled()
        historypageobj.automate_status_failed()


    })
    it('automate date filter',()=>{
        historypageobj.click_history()
        historypageobj.select_date_from_to()
        cy.wait(1000)
        historypageobj.find_transaction_between_dates()
        
    })
    
})