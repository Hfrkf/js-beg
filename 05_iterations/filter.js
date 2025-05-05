const coding=["js","cpp","rubyy","python"]
const values=coding.forEach((item)=>{
    console.log(item);
    return item//undefined
})
console.log(values);
//foreach doesnt returns the value but filter does

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=>num>4)
const newNums1=myNums.filter((num)=>{
    return num>4//for curly braces we need to add return function 
}
)
console.log(newNums);

//running this same thing by using for each
const newNums2=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums2.push(num)
    }
})
console.log(newNums2);

const books=[
    {title:"book one",genre:'fiction',publish:1981,
        edition:2000},
    {title:"book two",genre:'non-fiction',publish:1981,
        edition:2000},
    {title:"book three",genre:'history',publish:1981,
        edition:2000},
    {title:"book four",genre:'fiction',publish:1981,
        edition:2000},
    {title:"book five",genre:'non-fiction',publish:1981,
        edition:2000},
    {title:"book six",genre:'fiction',publish:1981,
        edition:2000},
    {title:"book seven",genre:'fiction',publish:1981,
        edition:2000},
    {title:"book eight",genre:'fiction',publish:1981,
        edition:2000},
    {title:"book nine",genre:'fiction',publish:1981,
        edition:2000},
    {title:"book ten",genre:'fiction',publish:1981,
        edition:2000},
    {title:"book one",genre:'fiction',publish:1981,
        edition:2000},
    {title:"book one",genre:'fiction',publish:1981,
        edition:2000},
];
let userBooks=books.filter((bk)=>bk.genre==="history")
 userBooks=books.filter((bk)=>{
    return bk.publish>=2000 && bk.genre==="fiction"
})

console.log(userBooks);

