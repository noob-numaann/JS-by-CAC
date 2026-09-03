const myNums = [1, 2, 3];

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval; ${currval}`);
//     return acc + currval;
// }, 0)


const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        item: "Js course",
        price: 2999
    },
    {
        item: "Python course",
        price: 4999
    },
    {
        item: "mobile development course",
        price: 5999
    },
    {
        item: "Data Science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( ( acc, item) =>  acc + item.price, 0)
console.log(priceToPay);