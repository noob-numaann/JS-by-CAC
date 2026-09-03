const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    swift: 'Swift by Apple',
}

for ( const key in myObject){
    // console.log(`${key}  is Shortcut for ${myObject[key]}`);
}

const programming = ["Js", "Python", "Ruby", "Swift"]

for (const key in programming){
    // console.log(programming[key]);
}

const map = new Map()
map.set("KSH", "Kashmir")
map.set("GLMRG", "Gulmarg")
map.set("PLGM", "Pahalgam")

for (const key in map){
    console.log(key); // map is not iterable with for in loop, it will give only the name of the object.
}