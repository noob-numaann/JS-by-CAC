// const coding = ["Js", "Python", "Ruby", "Swift", "C", "C++"]

//  const values = coding.forEach ((item) => {
//     console.log(item);
//     return item; // forEach does not return anything, it just executes the function for each item in the array.
// })
// console.log(values); // undefined, forEach does not return anything, it just executes the function for each item in the array.  


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
// const newNums = myNums.filter( (num) => {
//     return num > 4 // {}Using scope brackets, we need to use return statement to return the value.

// } )


// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num) // we can use push method to add the value to the new array.
//     }
//     })
// console.log(newNums); // [5, 6, 7, 8, 9, 10] , filter returns a new array with all the elements that pass the test implemented by the provided function.  


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks =  books.filter( (bk) => bk.genre === 'History')

 userBooks = books.filter((bk) =>{ 
    return bk.publish >= 1995 && bk.genre === 'History'
}) // filter returns a new array with all the elements that pass the test implemented by the provided function.
  console.log(userBooks);




