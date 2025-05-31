const accountId  = 1234
let accountEmail = "siddhika@123gmail.com"
var accountPassword = "12345"
accountCity = "Bhusawal"

// accountId = 2

console.log(accountId);
accountEmail = "abc@gmail.com"
accountPassword = "1212"
accountCity = "Faizpur"   

console.log(accountEmail)
console.log(accountPassword)
console.table([accountId,accountEmail,accountPassword,accountCity])

/*
Prefer not to use var because of issue in block and functional scope
*/ 