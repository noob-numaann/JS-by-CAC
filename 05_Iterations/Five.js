const coding = ["Js", "Python", "Ruby", "Swift", "C", "C++", "C#"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe())

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const mycoding = [
    {
        languageName:  "JavaScript",
        languageFileName: "Js"
    },
    {
        languageName:  "Java",
        languageFileName: "Java"
    },
    {
        languageName:  "Python",
        languageFileName: "PY"
    },
]
 mycoding.forEach((item) => {
    console.log(item.languageName, ':-', item.languageFileName);
 })