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
// console.log(loginUserMessage("Numan")); 
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());  

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 450));

const user = {
    username: "Numan",
    price: 444
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "Fii",
    price: 340
})

const myNewArray = [200, 400, 444]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 444, 4440]));
