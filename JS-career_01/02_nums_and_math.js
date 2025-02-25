
// ################## NUMBER ##################
// const num = new Number (100)
// console.log(num.toString())
// console.log(num.toString().length)

// const num2 = 12356.471
// console.log(num2.toPrecision(4))

// ################## MATH ##################

// console.log(typeof Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.4))
// console.log(Math.ceil(4.4))
// console.log(Math.floor(4.4))

// console.log(Math.random())  // always between 0 and 1

// ************************* what if i want value between 0 and 10 *************************
// console.log(Math.round(Math.random() * 10))

// but the best generic formula is : 

let min = 10
let max = 50

let randomNumber = Math.round((Math.random() * (max-min))) + min
console.log(randomNumber)