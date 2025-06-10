function sayMyName(){
    console.log("Siddhika");
}


//sayMyName => function ka reference and '()' ye hai execution

sayMyName();

//define krte tb parameters 
function add(a,b){
    console.log(a+b);
    
}

//call krte samay arguments bolte
add(5,6);

function loginUser(username){
    if(username === undefined) {
        console.log("Please Enter username");
        return
    }

    return `${username} just logged in`
}

const user = loginUser("Siddhika");
console.log(user);
const checkuser = loginUser();
console.log(checkuser);

function loginUserNew(username = "Ved"){
     if(!username) {
        //and can be written this way 
        //this will never get executed as default value is passed
        console.log("Please Enter username");
        return
    }

    return `${username} just logged in`
}

const userNew  = loginUserNew();
console.log(userNew);
