function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("e");
    console.log("e");
}
sayMyName()

function addTwoNumbers(number1,number2){//parameters are the bracket elements
    console.log(number1+number2);
}
addTwoNumbers(3,4)//arguments are the bracket elements
addTwoNumbers(3,"4")
addTwoNumbers(3,null)
const result =addTwoNumbers(3,5)
console.log("result:",result);//result:undefined

function addTwoNumbers1(number1,number2){//parameters are the bracket elements
    //let result=number1+number2
    console.log("hi");
    //return result
    return number1+number2
    console.log("hi");//after return this will not perform 
}
const result1=addTwoNumbers1(6,7)
console.log("result:",result1);

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("himanshee"));
console.log(loginUserMessage());//undefined

function calculateCartPrice(val1,val2,...num){//...num is rest operator here
    return num //return all the values in a form of an object
}
console.log(calculateCartPrice(100,200,230,5000));

//objects usage in functions 
const user={
    username:"himanshee",
    price:500
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)
handleObject({
    username:"hi",
    price:600
})

//arrays in functions
const myNewArray=[100,200,300,400]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,600]));

