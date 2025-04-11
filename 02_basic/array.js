//array
const myArr=[0,1,2,6,"himanshee"]
const myArr1=["shaktiman","doga"]
const myArr2=new Array(1,2,3,4)
console.log(myArr[1]);

//+++++++++ array methods
myArr.push(8)
myArr.push(6)
myArr.pop()
myArr.unshift(8)//insert an element at first position
myArr.shift()//deletes the first element
console.log(myArr);

console.log(myArr.includes(7));//False
console.log(myArr.indexOf(7));//-1
console.log(myArr.indexOf(6));//3

const newArr=myArr.join()
console.log(myArr);//[0,1,2,6,...]
console.log(newArr);//0,1,2,6,....
console.log(typeof(newArr));//string

//+++++++++ slice,splice +++++++++++++
console.log("A",myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);//[1,2]
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);//[1,2,6]
console.log("C",myArr);//all elements of myn2 from the aray




