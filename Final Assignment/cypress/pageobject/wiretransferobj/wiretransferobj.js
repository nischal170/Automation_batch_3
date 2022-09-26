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
export function update_wire_transfer(){
 
    
    wire.clearinputfield("#iban")
    wire.iban(iban)
    wire.clearinputfield("#bankName")
    wire.Bankname(bankname)
    wire.clearinputfield("#bankAddress")
    wire.Bankaddress(address)
    wire.clearinputfield("#postalCode")
    wire.postalcode(postalcode)
    wire.clearinputfield("#locality")
    wire.locality(locality)
    //wire.clearinputfield('#country')
    //wire.country("Nepal")
}
export function click_update_and_verify_toast(){
    wire.clickupdate(iban,bankname,address,postalcode,locality)
    wire.successfulupdate()
}