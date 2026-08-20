// const wifiUser = new Object()
const wifiUser = {}
wifiUser.id = "444nnn"
wifiUser.name = "Numan"
wifiUser.isLoggedIn = false

// console.log(wifiUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
     userfullname:{
        fristname:"Numan",
        middlename: "Ul",
        lastname: "Ashraf"
     }        
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 =  {1: "a", 2: "b", 3: "c" }
const obj2 = {4: "d", 5: "e", 6: "F"}
const obj4 = { 5: "g", 6: "h", 7: "i"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);


const users = [
     {
    id: 1,
    email: "nomail@gail.com"
},
{
    id: 1,
    email: "nomail@gail.com"
},
{
    id: 1,
    email: "nomail@gail.com"
},
]
users[1]. email

console.log(wifiUser);

console.log(Object.keys(wifiUser));
console.log(Object.values(wifiUser));
console.log(Object.entries(wifiUser));

console.log(wifiUser.hasOwnProperty('isLoggedIn'));
