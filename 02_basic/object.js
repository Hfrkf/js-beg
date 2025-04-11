//can be declared by 2 methods literals and constructors
//we cannot declare singleton with liberals
//we can declare it with constructors

//object literals
const mySym=Symbol("key1")

const jsUser={
    name:"himanshee",
    "full name":"himanshee ahuja",
    [mySym]:"mykey1",//actual way of representing an symbol rather writing just mysym
    age:20,
    location:"delhi",
    isloggedIn:false,
    lastloggedIn:["monday","saturday"]
}
console.log(jsUser.location);
console.log(jsUser["location"]);
//console.log(jsUser.full name)//we cant access this with a dot element
console.log(jsUser["full name"]);
console.log(jsUser.mySym);//mykey1
console.log(typeof jsUser.mySym);//string
console.log(jsUser[mySym]);

jsUser.email="dgejhdj@gmail.com"
Object.freeze(jsUser)
jsUser.email="edgferhj@gmail.com"//doesnt changes
console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello js user");
}
console.log(jsUser.greeting());//returns the log wla part
console.log(jsUser.greeting);//function[anonymous]

jsUser.greetingtwo=function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting());//returns the line with the name also





