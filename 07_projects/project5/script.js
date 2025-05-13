//generate random color
const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
//console.log(randomColor());

let intervalId;
const startChangingColor=function(){
    function changeBgColor(){
    document.body.style.backgroundColor=randomColor()
    }
    if(!intervalId){
    intervalId=setInterval(changeBgColor,1000)}
}
const stopChangingColor=function(){
    clearInterval(intervalId)
    intervalId=null;//optimized form but in this only once the stop function works so as to run properly we add if operator in startchanging color
}
document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)