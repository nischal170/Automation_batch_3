//function to check odd or even number 
function OddEvenChecker(number){
  if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}
 }
 OddEvenChecker(8)

 //swapping two numbers
const prompt = require("prompt-sync") ({sigint: true});
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');
let temp;
temp = a;
 a = b;
 b = temp;
 console.log(`The value of a after swapping: ${a}`);
 console.log(`The value of b after swapping: ${b}`);



 //prime number or not using function
 function test_prime(number)
 {
 
   if (number===1)
   {
     return false;
   }
   else if(number === 2)
   {
     return true;
   }else
   {
     for(let x = 2; x < number; x++)
     {
       if(number % x === 0)
       {
         return false;
       }
     }
     return true;  
   }
 }
let date = new Date()
let todaydate = date.getDate()
let x = test_prime(todaydate)


if(x==true){
  console.log("Today's date is prime number")
}
else{
  console.log("Today's date is not prime number");
}