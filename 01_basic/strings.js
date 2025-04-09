const name="himanshee"
const anycount=20

//console.log(name+anycount+"Value"); => himanshee20 Value

console.log(`Hello my name is ${name}  my anycount is ${anycount}`);

const gameName=new String('cfvf-ef-28')
console.log(gameName[0]);
console.log(gameName.__proto__);

//strings methods...
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5)); 
console.log(gameName.indexOf('f'));

 const newString=gameName.substring(0,4);
 console.log(newString);//cfvf

 const anotherString=gameName.slice(-6,4);//fvf if it is -8,4 thn it will be cfvf
 console.log(anotherString);
 
 const newStringOne="  himanshee   ";
 console.log(newStringOne);
 console.log(newStringOne.trim());//trim 2 stypes trimStart()/trimLeft() and trimEnd()/trimRight()
 
 const url="https://fehefherfjhuj378df"
 console.log(url.replace('fher','ABCD'));
 console.log(url.includes('hgy'));//false
 
 console.log(gameName.split('-')); //['cfvf','ef,'28']
 
 
 
 


