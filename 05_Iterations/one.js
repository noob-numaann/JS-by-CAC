// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 4){
        // console.log("4 is best number");
        
    }    
    // console.log(element);
    
}
// console.log(element); this will not print outside the scope.

for (let i =1 ; i <= 10 ; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let N = 1; N <= 12; N++) {
        // console.log(`Inner loop value ${N} and inner loop ${i}`);
        // console.log(i + '*' + N + ' = ' + i*N );
        
    }
    
}

 let myArray = ["noman", "oneman", "allmen"]
//  console.log(myArray.length);
 

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 4){
        console.log(" I Love 4");
       break // continue // skips once  
        
    }
    console.log(`Value of  i is ${i}`);
}