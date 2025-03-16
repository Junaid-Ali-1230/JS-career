const symbolKey = Symbol("Key1")
const obj = {
    name : "Junaid",
    wife : "Zunaira",
    target : "Deen",
    [symbolKey]: 'This is a symbol key',

    // if there is space
    "Gun name" : 909
}

// console.log(obj.wife)       //1st way
// console.log(obj["wife"])    //2nd way

// if key has space u cannot access it through obj.Gun name
// console.log(obj.Gun name)    // Error
// console.log(obj["Gun name"]) 

// Accessing symbol key : 
// => WRONG METHOD
    console.log(obj[symbolKey])

// CHECK THE EXISTENCE OF VALUE
const tinderUswe = {
    id: 1,
    name: "Junaid Ali",
    age: 24
}

console.log(tinderUswe.hasOwnProperty('name'))