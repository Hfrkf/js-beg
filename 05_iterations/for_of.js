//for of

//["","",""]
//[{},{},{}]

const arr= [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greetings= "hello world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`)
}

//maps->UNIQUE VALUES
const map=new Map()
map.set('IN',"India")
map.set('uSA',"United states of america")
map.set('Fr',"France")
map.set('IN',"India")
console.log(map);

for (const key of map) {
    console.log(key); 
}
for (const [key,value] of map) {
    console.log(key,':-',value); 
}

const myObject={
    'game1':"nsa",
    'game2':"spiderman",
    'game3':"superman"
}
for (const [key,value] of myObject) {//in this object is not iterable
    console.log(key,':-',value); 
}
const myObject1={//for this too object isnot iterable
    game1:"nsa",
    game2:"spiderman",
    game3:"superman"
}