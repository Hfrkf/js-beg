let score="65fgh"

console.log(typeof(score));
console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"=>33
//"33gg"=>NaN
//true=>1; false=>0
/* in boolean case
either true or false
so if any string or number is their so the value is true
if empty string thn value is false
0=>false
*/

let isLoggedIn="gjh"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//// OPERATIONS//
 let value=3
 let negValue=-value
 console.log(negValue); //-3

 console.log(2+2);
 
 str3=str1+str2;
 console.log(str3);
console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"1");//31

console.log(+true);//1
console.log(+"");//0
//console.log(true+); //error

let num1,num2,num3
//num1=num2+num3=2+2

let gameCounter=100
gameCounter++;//101
console.log(gameCounter);

let y=gameCounter++;//y=100
++gameCounter;//101
let z=++gameCounter;//z=101
