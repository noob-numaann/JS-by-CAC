const accountId = 144553 
let accountEmail = "numan@gmail.com"
var accountPassword = "1234"
accountCity = "Kashmir"
let accountState;

// accountId = 2  // Not allowed "we can't change value of const keyword".
// accountEmail = "nomail@gmail.com"
// accountPassword = "6897"
 // accountCity = "srinagar"
console.log(accountId);
/*
Prefer not to use var
 becuase of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
