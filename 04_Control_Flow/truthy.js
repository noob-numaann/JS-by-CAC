const userEmail =  [] //"num@gamil.com"

if (userEmail){
    console.log("Got user email");
    
} else {
    console.log("Don't have user email");
    
}

// falsy values
  // false, 0, -0, BigInt 0n, null, undefined, NaN


// truthy values
  // "0", 'false', " space ", [], {}, function(){},

//   if (userEmail.length === 0){
//     console.log("Array is empty");
    
//   }

const emptyObject ={}

    if (Object.keys(emptyObject).length === 0){
console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 4 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 444

console.log(val1);

// Terniary Operator

// conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");

