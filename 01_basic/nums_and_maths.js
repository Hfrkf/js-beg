//++++++++++++++++++++ nums +++++++++++++

const score=200
console.log(score);//200 type=undefined

const balance=new Number(334)
console.log(balance);//[Number:334]

console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//334.00

const otherNumber=123.476
console.log(otherNumber.toPrecision(4));//123.5

const hundreds=10000000
console.log(hundreds.toLocaleString());//10,000,000
console.log(hundreds.toLocaleString('en-IN'));//1,00,00,000

//++++++++++++++ maths ++++++++++

console.log(Math);//object[Math]
console.log(Math.abs(-4));//4
console.log(Math.round(6.7));//7
console.log(Math.ceil(6.2));//7
console.log(Math.floor(6.7));//6
console.log(Math.min(6,7,3,9,1));
console.log(Math.max(6,7,3,9,1));

console.log(Math.random());//ranges from 0 to 1 always
console.log((Math.random()*10)+1);//+1 is added so as to avoid the 0th value
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);
