 console.log("2">1);//true
console.log("02">1);//true

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
 /* bcz an equlaity check == and comparisons ><>=<=
 works diffrently. comparisions convert null to a 
 number testing it as a 0 thats why null>=0 is true 
 and null>0 is false
 */
 console.log(undefined==0);//false
 console.log(undefined>0);//f
 console.log(undefined<0);//f
// mostlt we avoid this type of code null and undefined

 ////STRICT CHECK(===)
console.log("2"===2);//f
/* in this no conversion chwcks but it chceks the datatype 
as they both have diff datatype one is string and other is no
that why it is showing false
*/