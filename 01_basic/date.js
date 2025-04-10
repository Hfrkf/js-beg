//++++++++++ Dates ++++++++

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());//thu Apr 10 2025.. with tym
console.log(myDate.toDateString());//thu Apr 10 2025
console.log(myDate.toISOString());//2025-04-10..
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());// 4/10/2025
console.log(myDate.toLocaleString());//date with tym
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);//object

let myCreatedDate= new Date(2023,0,25)//months starts from 0 in js
let myCreatedDatewithtime= new Date(2023,0,25,5,3)//date with tym
//let myCreatedDate= new Date("2023-01-25") //invalid syntax
//let myCreatedDate= new Date("01-20-2025") //valid in MM-DD-YYYY Format
console.log(myCreatedDate.toDateString());//mon jan 23 2023

let myTimeStamp=Date.now()
console.log(myTimeStamp);//gives date in millisecond
console.log(myCreatedDate.getTime());

console.log(Date.now()/1000);//into seconds
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);//+1 is added to get the exact month
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})

