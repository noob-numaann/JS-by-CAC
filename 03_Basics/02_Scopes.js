
let a = 400

if (true) {   // all this written in if is BLOCK scope, and outside if is GLOBAL SCOPE
 let a = 1
 const b = 2
//  console.log("INNER:", a);
}


// console.log(a);
// console.log(b);

 function one(){
    const username = "Numan"

    function two(){
        const website = "Youtube"

    // console.log(website);
    }
    // console.log(website); // error :- out of scope.
    two()
    // console.log(username);
 }
one()

if (true){
    const username = "Numan"
    if (username === "Numan"){
        const website = " Youtbe"
        // console.log(username + website);
    }
    // console.log(website); error:- out of scope
}
// console.log(username); error :- out of scope


//++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++
console.log(addone(4));
function addone(num) {
    return num +1    

}


addTwo(5) // error:-ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
     return num + 2    
}
console.log(addTwo(5));