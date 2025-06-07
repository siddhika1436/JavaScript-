//singleton

const JsUser = {
    name:"siddhika",
    "full name":'siddhika rajput',  //only square notation can be used to access
    age:"19",
    city:"Faizpur",
    email:"siddhika129@gmail.com"
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);

JsUser.email = "siddhika243@gmail.com"
console.log(JsUser.email);
// Object.freeze(JsUser)   //is vjh se object freeze kr diya


JsUser.email = "sanju123@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Good Morning! ,${this.name}`);
}    //...ye bolra ki ye function nhiyy kyuki object freeze kr liya

console.log(JsUser.greeting())

const  appUser = {}

appUser.id = "sidraj"
appUser.name= "siddhika"
appUser.isLoggedIn = false

console.log(appUser)