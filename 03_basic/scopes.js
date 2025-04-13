//var c=300//global scope 
let a=300//300


if(true){//block scope
    let a=10
    const b=20
    //var c=40
    console.log("inner:",a);//30  
}


console.log(a);//error
console.log(b);//error
console.log(c);//return the value of c thus var is bekar to use 



