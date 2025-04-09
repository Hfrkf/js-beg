const accountId=1234
let accountEmail="abc@bcd.com"
var accountPassword="12345"
accountCity="Delhi"
let accountState;

// accountId=321 //noe allowed

accountEmail="dgb@jdg.com"
accountPassword="235"
accountCity="pune"

console.log("accountId");
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
we prefer to use only const and let rather than var
because of the issue of block scope and functional scope
*/