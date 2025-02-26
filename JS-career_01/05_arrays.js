let arr1 = [0, 1, 2, 3]
let arr2 = [4, 5, 6, 7]

// ################# We have to join them #################
// =>Method-1:
// let arr3 = arr1.concat(arr2)
// console.log(arr3)

// =>Method-2: using spread operator
// let arr3 = [...arr1, ...arr2]
// console.log(arr3)

// ################# How to flat the array #################
// const example_array = [0, 1, 2, [3, 4, 5, [6, 7], 8, [9, [10, 11, [12]]]]]
// console.log(example_array.flat(Infinity))  


// ################ SOME FUNCTIONS ################
// console.table([Array.isArray("Junaid"), Array.from("Junaid")]);

let a=1, b=2, c=3
console.log(Array.of(a, b, c))
