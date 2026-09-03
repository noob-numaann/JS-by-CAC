// for of
// ["", "", "" ]

// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// MAPS only  for unique values

const map = new Map()
map.set("KSH", "Kashmir")
map.set("GLMRG", "Gulmarg")
map.set("PLGM", "Pahalgam")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = { 
    // 'game1': 'PUBG',
    // 'game2': 'Call Of Duty',

    game1: 'PUBG',
    game2: 'Call Of Duty',
}
// for ( const [key, value] of myObject){
//     conosle.log( key, ':-', value);
// }

