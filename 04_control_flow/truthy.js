const userEmail="hi@456"

if(userEmail){
    console.log("got user name");
}
else{
    console.log("dont have  username");
}

//falsy values
//false, 0, -0, BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},function(){}

const userId=""
if(userId.length===0){
    console.log("array is empty");   
} 

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

//Nullish Coalescing Operator(??):null undefined

let val1;
val1=5??10//5
val1=null??10//10
val1=undefined??15//15
val1=null??10??20//10

console.log(val1);

//terniary operator
//condition?true:false
const icePrice=100
icePrice>=90?console.log("more than 90"):console.log("less than 90")

//=== ->not only checks the value but also its type