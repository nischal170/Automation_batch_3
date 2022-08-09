let date=new Date();
let day=date.getDate();

function checkdate(dat)
{
    let flag=0;
for (i=2;i<(date);i++)
{
    if (date%i==0){
       
        flag=1
        {break;}
    }
      


}
//console.log("value of flag=",flag)
if (flag==1){
    console.log('notprime')

}
else{
    console.log('prime')
}
}

checkdate(day)