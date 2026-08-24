const user = {
    username: "Numan",
    price: 444,
     
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to my Website.`);
        console.log(this); // gives output as current context.
        
        
    }
}
// user.welcomeMessage()
// user.username = "Fii"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Numan"
//     console.log(this.username);      // output:-undefined.
// }
// chai()

// const chai = function() {
//     let username = "Numan"
//     console.log(this.username);
        
// }
// chai()

const chai = () => {
    let username = "Numan"
    console.log(this);
        
}
// chai()

// const addTwo = (num1, num2) => { // Basic arrow function.
//     return num1 + num2
// }
// console.log(addTwo(44,43));

// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(44,34))

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(4,4))


const addTwo = (num1, num2) => ({username: "Numan"}) // to return object with Arrow function.

console.log(addTwo(3,4));

