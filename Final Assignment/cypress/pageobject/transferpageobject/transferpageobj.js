import { transferpage } from "../../page/transferpage";
import { faker } from '@faker-js/faker';
const transfer=new transferpage()
var transfer_amount=Number(faker.datatype.number({min:1, max:5}))
var receiver_email='kush@mailinator.com'
var note=faker.random.word()
var invalid_email=faker.internet.email()
export function transfer_via_ui(){
    transfer.clicktransferbutton()
    transfer.typetransferamount(transfer_amount)
    transfer.typereceiver(receiver_email)
    transfer.typenote(note)
    transfer.clickpreview_transfer()
    transfer.clicktransferegwap()
}
export function input_field_assertions(){
    transfer.clicktransferbutton()
    transfer.typetransferamount(1)
    transfer.clear_transfer_page_input_field('#amount')
    transfer.transfer_amt_input_verify()
    transfer.typereceiver("@@")
    transfer.clear_transfer_page_input_field('#receiver')
    transfer.receiver_input_verify()



}
export function transfer_with_invalid_email(){
    transfer.clicktransferbutton()
    transfer.typetransferamount(transfer_amount)
    transfer.typereceiver(invalid_email)
    transfer.typenote(note)
    transfer.clickpreview_transfer()
    transfer.email_invalid_assertion()

}
export function verify_toast_message(){
    transfer.successfulltransfer_toast_message()

}
export function verify_with_api(){
    transfer.verify_transfer_with_api(transfer_amount,receiver_email,note)
}
export function save_to_json(){
    transfer.savetojson()
}
