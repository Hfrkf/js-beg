//if
if(2==2){
    console.log("hello");
}
else{
    console.log("rf");
}
console.log("yo");

const balance=1000
if(balance>500) console.log("test")//implict code

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn&&debitCard){
    console.log("allow to buy");
}
if(loggedInFromEmail||loggedInFromGoogle){
    console.log("user logged in");
}
