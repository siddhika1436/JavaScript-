function caculatecartPrice(...num1){
    //... => rest operator elements ko array me daal denga khud se ek se jyada honge to baadme arrays sikh kr addition ho jayegi
    return num1;
}

console.log(caculatecartPrice(200,400,500))

const user = {
    username: "siddhika",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user);

handleObject({
    username:'ved',
    price:299
})
