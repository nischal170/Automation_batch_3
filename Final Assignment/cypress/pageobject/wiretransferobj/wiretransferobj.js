import {wire_transferpage} from "../../page/wiretrasferpage";
import { faker } from '@faker-js/faker';
const wire= new wire_transferpage()
var iban=faker.finance.iban(true, 'NL')
var bankname=faker.company.name()
var  address=faker.address.streetAddress()
var postalcode=faker.address.zipCode('#### AK')
var locality=faker.address.cityName()
export function click_wire_transfer(){
    wire.clickwiretransfer()
}
export function check_breadcrumb(){
    wire.wiretransferbreadcrumb()
}
export function clear_input_fields(){
    wire.clearinputfield("#iban")
    wire.clearinputfield("#bankName")
    wire.clearinputfield("#bankAddress")
    wire.clearinputfield("#postalCode")
    wire.clearinputfield("#locality")
    wire.clearcountry()
}
export function update_wire_transfer(){   
    wire.clearinputfield("#iban")
    wire.iban(iban)
    wire.clearcountry()
    wire.country("Mexico")
    wire.clearinputfield("#bankName")
    wire.Bankname(bankname)
    wire.clearinputfield("#bankAddress")
    wire.Bankaddress(address)
    wire.clearinputfield("#postalCode")
    wire.postalcode(postalcode)
    wire.clearinputfield("#locality")
    wire.locality(locality)

}
export function click_update_and_verify_toast(){
    wire.clickupdate_and_verify_with_api(iban,bankname,address,postalcode,locality)
    wire.successfully_updated_toast_message()
}
export function verify_empty_input_fields(){
    wire.verify_iban_empty_field()
    wire.verify_bankname_empty_field()
    wire.verify_bankaddress_empty_field()
    wire.verify_country_empty_field()
    wire.verify_postalcode_empty_field()
    wire.verify_locality_empty_field()

}
export function verify_inputfields_after_update(){
    cy.get('@get_update_wire_transfer').then((res)=>{
        cy.get("#iban").then((element)=>{
            var text=element.val()
            text=text.replace(/\s+/g, '')
            expect(text).to.equal(res.response.body.iban)
        })
        cy.get("#bankName").should("have.value",res.response.body.bankName)
        cy.get("#bankAddress").should("have.value",res.response.body.bankAddress)
        cy.get("#postalCode").should("have.value",res.response.body.postalCode)
        cy.get("#locality").should("have.value",res.response.body.locality)
    })
}