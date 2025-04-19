// Immediately Invoked Function Expression(IIFE)=> we use this to basically remove the global scope pollution 
//which might can occur

/*()()
    first bracket gives the definition
    second bracket tells us about the execution
    for ending this function so that the other will work we need to end that by applying and ";" at end
*/

//named iife
(function one(){
    console.log("DB CONNECTED");
})();

//unnamed iife
( ()=>{
    console.log("DB CONNECTED TWO");
})();

//parameter iife
( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('himanshee')