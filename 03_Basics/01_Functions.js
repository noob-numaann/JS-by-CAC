function MyName (){
    console.log("N");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("N");   
}
// MyName()

// function addTwoNumbers (number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(44, 53)
// addTwoNumbers(4 , "4") //44

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // consolel.Log("This console won't work.")
    return number1 + number2
}
const result = addTwoNumbers(3, 1)
// console.log("Result:", result);

function loginUserMessage(username = "fi"){
    if (!username){
        console.log("Please enter a username");
       return 
    }
    return`${username} just logged in`
}
console.log(loginUserMessage("Numan")); 
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());  