//arrow func and this keyword

// const user = {
//     username: "siddhika",
//     price: 199,

//     welcomeMessage : function(){
//         console.log(this);
        
//         console.log(`${this.username} , welcome to website`);
//     }


// }

// user.welcomeMessage();
// user.username = "ved"
// user.welcomeMessage();


//browser ke andar jo global object hai wo window hai

// function chai(){
//     console.log(this);
// }

// chai()

const coffee = () =>{
    console.log(this);
    
}

coffee()