// //singleton

// const JsUser = {
//     name:"siddhika",
//     "full name":'siddhika rajput',  //only square notation can be used to access
//     age:"19",
//     city:"Faizpur",
//     email:"siddhika129@gmail.com"
// }

// // console.log(JsUser.name);
// // console.log(JsUser["name"]);

// JsUser.email = "siddhika243@gmail.com"
// console.log(JsUser.email);
// // Object.freeze(JsUser)   //is vjh se object freeze kr diya


// JsUser.email = "sanju123@gmail.com"
// console.log(JsUser)

// JsUser.greeting = function(){
//     console.log(`Good Morning! ,${this.name}`);
// }    //...ye bolra ki ye function nhiyy kyuki object freeze kr liya

// console.log(JsUser.greeting())

// const  appUser = {}

// appUser.id = "sidraj"
// appUser.name= "siddhika"
// appUser.isLoggedIn = false

// console.log(appUser)

const regularUser = {
    userEmail: "siddhika123gmail.com",
    fullname: {
        userFullName: {
        firstName: "siddhika",
        lastName: "rajput"
        }
    }
}

console.log(regularUser.fullname.userFullName);

console.log(Object);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign(obj1,obj2)
const obj3 = Object.assign({},obj1,obj2);  //curly braces is target hai jo achieve krna baki sab src
console.log(obj3);

const obj4 = {...obj1,...obj2} //use this always
console.log(obj4);

const {userEmail:email} = regularUser;
console.log(email);


//JSON => object hi hai bss usko koi naam nahi hai
//keys and values yaha string rehti warna error aate coz agar string nahi diya to wo use as a object treat karega and error throw karega

// {
//     "name" : "siddhika",
//     "coursename ":  "javascript",
// }