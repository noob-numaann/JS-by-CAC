// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB connected`);
})();
 // IIFE is used to take away pollution created by global scope.

 ( (name) => {
    console.log(`DB connected two ${name}`);
    
 })('Numan');

