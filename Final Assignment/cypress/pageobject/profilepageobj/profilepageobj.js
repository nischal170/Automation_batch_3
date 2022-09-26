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
    
    profile.clearinputfield("input#firstName")
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
    //profile.clearinputfield("#country")
    //profile.select_country("Nepal")
}
export function click_update_and_verify_toast(){
    profile.clickupdate()
    profile.successfulupdate()
}
export function clear_input_field_and_verify_input_field(){
    profile.clearinputfield("input#firstName")
    profile.clearinputfield("#lastName")
    profile.clearinputfield("#address")
    profile.clearinputfield("#city")
    profile.clearinputfield("#state")
    profile.clearinputfield("#country")
}