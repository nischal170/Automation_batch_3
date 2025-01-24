import { useroperations } from "../../page/adduser/adduser";
const us=new useroperations()
const uniqno=Date.now()
const username="admin"+uniqno
export function fill_details(){
    us.clickadduser()
    
    us.filluserdetail(username,"Admin",1,"U0ci^f96")
    us.clicksave()
}
export function searchandedit(){
    us.forsearching(username)
    us.editingstatusearched(username)

}
export function search_and_delete(){
    us.forsearching(username)
    us.deletesearched()

}