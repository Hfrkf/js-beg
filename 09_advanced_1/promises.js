//promise is an object representation

const promiseOne=new Promise(function(resolve,reject){//apne aap mein ek callback h
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('async task is complete'); 
    },1000)
    resolve()//this display the then operator context
})
promiseOne.then(function(){//direct connection with the resolve func
    console.log("promise is consumed");   
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async is evolved");
    
})


const promiseThree=new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve({username:"himanshee", email:"hi@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour=new Promise (function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"himanshee", password:"3435"})
        }
        else{
            reject('ERROR:somthing went wrong')
        }
    },1000)
})

//this will give an error so we can not do this way
// const username=promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })
// console.log(username);

promiseFour.then((user)=>{
    console.log(user);
    return user.username  
}).then((username)=>{
    console.log(username);
}).catch(function(error){//as error is generating
    console.log(error); 
}).finally(()=>{
    console.log("the promise is either resolved or rejected");
})


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javscript", password:"3435"})
        }
        else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})
async function consumePromiseFive() {
    try{
        const response=await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);  
    }
}
consumePromiseFive()

async function getAllUsers() {
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        console.log(data);
    }
    catch(error){
       console.log("e:",error);
        
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
    return response.json()
}).then((data)=>{
    console.log(data); 
})