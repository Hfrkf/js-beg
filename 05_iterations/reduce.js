const myNums=[1,2,3]
let myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval
},0)//0 is added so as to teel the acculator that you need to start from 0 value
console.log(myTotal);

//in arrow form
 myTotal=myNums.reduce((acc,curr)=>acc+curr,0) 
 console.log(myTotal);
 
 const shopping=[
    {
        itemname:"js course",
        price:500
    },
    {
        itemname:"data science course",
        price:5500
    },
    {
        itemname:"web dev course",
        price:1200
    },
 ]
 const pricetopay=shopping.reduce((acc,item)=>acc+item.price,0)
 console.log(pricetopay);
 