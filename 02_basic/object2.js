//object singleton or constructor

const tinderUser=new Object()//this is a singleton obj
console.log(tinderUser);//{}empty obj

const tinderUser1={}//this is non-singleton
tinderUser1.id="123dv"
tinderUser1.name="hello"
tinderUser1.loggedIn=false
console.log(tinderUser1);

const regularUser={
    email:"jdhj@gmail.com",
    fullname:{
        userfullname:{
            firstname:"himanshee",
            lastname:"ahuja"
        }
    }
}
console.log(regularUser);
console.log(regularUser.firstname);//undefined
console.log(regularUser.fullname.userfullname.firstname);//himanshee

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=obj1+obj2
console.log(obj3);//{obj1:{....},obj2:{...}}
const obj4=Object.assign({},obj1,obj2)//{}act as an target and other as source
console.log(obj4);//{'1':a,....}

const obj5={...obj1,...obj2}//mostly 90% of tym we use this syntax
console.log(obj5);

const users=[
    {
       id:1,
       email:"frefe@gmai.com"  
    },
    {
        id:1,
        email:"frefe@gmai.com"  
     },
     {
        id:1,
        email:"frefe@gmai.com"  
     }
]
users[1].email
console.log(tinderUser1);

console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));//all the possible entries given
console.log(tinderUser1.hasOwnProperty('loggedIn'));//true


//deconstructing
const course={
    coursename:"javacript",
    price:"213",
    courseInstructor:"fgh"
}
//course.courseInstructor
const {courseInstructor:instructor}=course
//console.log(courseInstructor);
console.log(instructor);


//JSON values fromatting for api
// {
//     "name":"himanshee",
//     "coursename":"js"
//     "price":"free"
// }

[
    {},
    {},
    {}
]





