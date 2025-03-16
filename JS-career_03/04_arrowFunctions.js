

// ########################################### using this keyword in object ###########################################
const user = {
    name: "Junaid",
    website: "Binance",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.name}, welcome to ${this.website}`);       
        
        // console.log(this)    // Check its output : This will give you the info about its context i.e: the data of object
    },
}

// // As we know this refer to the context.
user.welcomeMessage()
// user.name = "Sam"       // here we changed the context,
// user.welcomeMessage()

// console.log(this)    // Check its output : This will give you the info about its context i.e: node environment {}

// ########################################### using this keyword in Function ###########################################

// function chai (){
//     let username = "Junaid"
//     console.log(this.username);
// }
// chai()

// ------------------------------------------------------------------

// 2nd way of defining func
// const chai = function() { 
//         let username = "Junaid"
//         console.log(this.username);
// }

// 3rd way of defining func
const chai = () => { 
        let username = "Junaid"
        console.log(this.username);
}


// const addTwoNums = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwoNums(1, 2));

//###### IMPLICIT RETURN ######

const addTwoNums = (num1, num2) => num1 + num2
// const addTwoNums = (num1, num2) => (num1 + num2)  // can also be written like this
console.log(addTwoNums(1, 2));

const someFunc = (num1, num2) => ({name: "Junaid", job: "Trader"})
console.log(someFunc());
