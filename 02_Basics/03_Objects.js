// singleton

// object.create 

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Numan",
    "Full Name": "Numan Ul Ashraf",
    [mySym]: "mykey1",
    age:  22,
    location: "Kashmir",
    email: "numan@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Full Name"]);
console.log(jsUser[mySym])

jsUser.email = "numanoo@nomail.com" // we can change it by this method.

// Object.freeze(jsUser)
// jsUser.email = "omail@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name} this is ur email, ${this.email}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
