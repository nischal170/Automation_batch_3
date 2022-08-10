//simple function
function even_odd(num){
    console.log("this is from simple function")
    if (num%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }

}
even_odd(2)
//arrow function
const evenodd=(num)=>{
    console.log("this is from arrow function")
    if (num%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
evenodd(9)