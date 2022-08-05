
const fak=require('@faker-js/faker')
let btnGen=document.querySelector('button');
btnGen.addEventListener('click',()=>{
    const remail=fak.internet.email();
    console.log(remail)

})