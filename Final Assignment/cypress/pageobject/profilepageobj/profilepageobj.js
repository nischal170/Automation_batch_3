import { profilepage } from "../../page/profilepage";
import { faker } from '@faker-js/faker';
const profile=new profilepage()
    
export function click_account_settings(){
    profile.clickaccountsettings()
}
export function check_breadcrumb(){
    profile.breadcrumb()
}
export function update_profile(){
    var firstname=faker.name.firstName()
    var lastname=faker.name.lastName()
    var postcode=faker.address.zipCode('#### AK')
    var locality=faker.address.cityName()
    var address=faker.address.streetAddress()
    var appartment=faker.address.buildingNumber()
    var country=faker.address.country()
    profile.clearinputfield("#firstName")
    profile.First_name(firstname)
    profile.clearinputfield("#lastName")
    profile.last_name(lastname)
    profile.clearinputfield("#address")
    profile.address(address)
    profile.clearinputfield("#city")
    profile.aptcity(appartment)
    profile.clearinputfield("#state")
    profile.locality(locality)
    profile.clearinputfield("#zip")
    profile.zipcode(postcode)
    profile.select_country(country)
}
export function click_update_and_verify_toast(){
    profile.clickupdate()
    profile.successfulupdate()
}
export function clear_input_fields(){
    profile.clearinputfield("#firstName")
    profile.clearinputfield("#lastName")
    profile.clearinputfield("#address")
    profile.clearinputfield("#city")
    profile.clearinputfield("#state")
    profile.clearinputfield("#zip")
    profile.clearcountry()
    //profile.clearinputfield("#country")
}
export function verify_name_input_fields(){
    var array=["First","Last"]
    var i=0
    cy.get("div.ant-col-lg-12 div[role='alert']").each((element)=>{
        expect(element.text()).to.equal(array[i]+" "+"Name is required!")
        i=i+1
    })
}
export function verify_street_input_field(){
    cy.get("div.ant-col.ant-col-xs-24.ant-col-lg-24 div[role='alert']").should("contain","Street Name and Number is required!")
}
export function postalcode_field_verify(){
    profile.postalcodefield_verify()
} 
export function locality_field_verify(){
    profile.localityfield_verify()
}
export function country_field_verify(){
    profile.countryfield_verify()
}
export function verify_inputfields_after_update(){
        cy.get('@view_updated_users_profile').then((res)=>{
            cy.get("#firstName").should("have.value",res.response.body.firstName)
            cy.get("#lastName").should("have.value",res.response.body.lastName)
            cy.get("#address").should("have.value",res.response.body.address)
            cy.get("#city").should("have.value",res.response.body.city)
            cy.get("#state").should("have.value",res.response.body.state)
            cy.get("#zip").should("have.value",res.response.body.zip)
            cy.get(".ant-form-item-control .ant-select-selector .ant-select-selection-item").then((element)=>{
                expect(element.text().trim()).to.equal(res.response.body.country)
            })
        })
}