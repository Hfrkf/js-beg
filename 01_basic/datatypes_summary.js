//primitive and non primitive
//callby value and call by reference

//////////////javascript is dynamically typed


//primitive=> call by value, changes ared made in the copy not to the actual value
//7 types: String,Number,Boolean,null,undefined,Symbol(value ko unique bnane k liye),BigInt
 
const score=100//int
const scoreValue=100.34//float
const isLoggedIn=false//bool
const outsideTemp=null//null=> returntype=Object
let userEmail;//undefined  //returntype=undefined

const id=Symbol('123')
const anotherId=Symbol('123')//return type is symbol
console.log(id===anotherId);//false bcz if the value od symbol is same then also they both contains different values

const bigNumber=3568789798098937857n//return type is bigint


//reference(non-primitve)
//Array, Objects,Function

const heros=["saktiman","naaraj","doga"]; //all its values returntype will be object
let myObj={ //returntype=object
    name:"himanshee",
    age:21
}

const myFunction=function(){// its return shows function but is actually an object function
    console.log("hello world");
}

console.log(typeof myObj);
console.log(typeof userEmail);
