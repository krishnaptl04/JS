const accountId = 14834
let accountEmail = "krishna1234@gmail.com"
var accountPassword = "12345"
accountCity = "Ghej"
let accountState;

// accountId = 2 // not allowed

accountEmail = "krishna4321@gmail.com"
accountPassword = "54321"
accountCity = "Chikhali"

console.log(accountId);
/*
prefer not to use var
bcz of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
