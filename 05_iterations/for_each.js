const coding=["js","cpp","rubyy","python"]

coding.forEach(function(val){
    console.log(val);
})
coding.forEach((items)=>{
    console.log(items);
})
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr); 
})

const myCoding=[
    {
        languageName:"javascipt",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})

