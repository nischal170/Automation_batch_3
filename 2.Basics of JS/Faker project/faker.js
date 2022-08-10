//import { faker } from '@faker-js/faker'
import { faker } from '@faker-js/faker/locale/de';
import * as fs from 'fs';

//const faker=require('@faker-js/faker')
var arr=[];
var i=0;
for (i=0;i<=10;i++)
{  var remail=faker.internet.email();
    arr.push(remail)
}


console.log(` email: ${arr}`);
const content = arr.toString();
console.log(content)



fs.writeFile('\Faker project\generatedemail.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});