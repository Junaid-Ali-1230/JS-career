// ********************************** DATE **********************************
let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.getDate())
// console.log(myDate.getDay())    // day of week (exp wed = 3)
// console.log(myDate.toJSON())

// ********************************** TIME **********************************

let myTimeStamp = Date.now()

// console.log(myTimeStamp)    // Time in milliseconds from 1-Jan-1970
// console.log(Math.floor(myTimeStamp/1000))   // Time in seconds

// ################## TASK = Print seconds passed of today ##################
const now_MilliSeconds = Date.now()
const dayStart_MilliSeconds = new Date().setHours(0, 0, 0, 0)

const now_Seconds = Math.floor(now_MilliSeconds/1000)
const dayStart_Seconds = Math.floor(dayStart_MilliSeconds/1000)

console.log(`Total seconds passed of today are ${now_Seconds-dayStart_Seconds}`)







