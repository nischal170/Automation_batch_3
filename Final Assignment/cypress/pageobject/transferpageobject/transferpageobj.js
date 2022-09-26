import { transferpage } from "../../page/transferpage";
import { faker } from '@faker-js/faker';
const transfer=new transferpage()
var transfer_amount=Number(faker.datatype.number({min:1, max:5}))
var receiver_email='kush@mailinator.com'
var note=faker.random.word()
export function transfer_via_ui(){
    transfer.clicktransferbutton()
    transfer.typetransferamount(transfer_amount)
    transfer.typereceiver(receiver_email)
    transfer.typenote(note)
    transfer.clicksubmit()
    transfer.clicktransferegwap()
}
export function verify_toast_message(){
    transfer.successfulltransfer()

}
export function verify_with_api(){
    transfer.verify_transfer_with_api(transfer_amount,receiver_email,note)
}
export function save_to_json(){
    transfer.savetojson()

}
