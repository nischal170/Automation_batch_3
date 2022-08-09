let date=new Date();
let day=date.getDate();

function checkdate(dat)
{
    let flag=0;
for (i=2;i<(dat);i++)
{
    if (dat%i==0){
       
        flag=1
        {break;}
    }
      


}
if (flag==1){
    console.log('notprime')

}
else{
    console.log('prime')
}
}

checkdate(day)