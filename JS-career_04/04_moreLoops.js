// ARRAY SPECIFIC LOOPS
// for of loop

// ["", "", ""]
// [{}, {}, {}]
// -------------------------------------------------------------------

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (const num of arr) {
//     console.log(num)
// }

// -------------------------------------------------------------------


// const greetings = 'Hello World'

// for (const i of greetings) {
//     // if (i === ' ') {continue}    // extra line-> Just for understanding
//     console.log(i)
// }


// -------------------------------------------------------------------


// Maps
/**
 MAP vs OBJ 
 =>Both are key value pairs.
 =>Map remember order of pairs while object donot.
 =>Map keys are unique.
 */

const map = new Map()
map.set('PK', 'Pakistan')
map.set('IN', 'India')
map.set('FR', 'France')
map.set('IT', 'Italy')


// console.log(map)
// map.set('IT', 'New_Italy')  // this will override existing value of IT key.
// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// -------------------------------------------------------------------




const myObject = {
    'F_Name' : 'Junaid',
    'L_Name' : 'Ali'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }    // not work for objects

// -------------------------------------------------------------------

