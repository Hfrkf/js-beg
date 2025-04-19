// ++++++++++++ prerequistic+++++
const user={
    username:"himanshee",
    price:300,

    welcomeMsg:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);//prints all the values present in user
    }
}
user.welcomeMsg()
user.username="himu"
user.welcomeMsg()//updates the username as per above

console.log(this);//this will give empty bracket in this 
//but when we apply this browser then it will give windows as 
//an ouput all its window function click, arrow and etc all will be displayed


//this words only in object not inside any function

function one(){
    let username="himanshee"
    console.log(this.username);//undefined   
    console.log(this);//prints all the global values present in that
}
one()

//+++++++ same for const as well
// const one=function (){
//     let username="himanshee"
//     console.log(this.username);//undefined   
//     console.log(this);//prints all the global values present in that
// }
// one()

// +++++++++ arrow function
const one1=()=>{
    let username="himanshee"
    console.log(this);//give and empty bracket
    console.log(this.username);//undefined
}
one1()

// +++++++ explicit return ++++++ in which we have to add return variable
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(8,7));

//++++ implicit return ++++
const addTwo1=(num1,num2)=> num1+num2
console.log(addTwo1(8,7));

const addTwo2=(num1,num2)=>(num1+num2)//no need to write return statement in this type of parenthesis, it added when curly bracket are there
console.log(addTwo2(7,8));

const addTwo3=(num1,num2)=>({username:"himu"})// for returning an object
console.log(addTwo3(7,8));

 