function checkdate(date)
{
    let i = 0;
    let flag=0;
for (i=2;i<(date);i++)
{   console.log(i)

    if (date%i==0){
       // console.log("divisible by",i)
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

checkdate(22)