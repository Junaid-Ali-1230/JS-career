// Immidiately Invoked function Expressions

// function chai(){
//     console.log("DB CONNECTED");
// }
// chai()  // this is normal function





(function chai(){
    //named IIFI
    console.log("DB CONNECTED");
})();    // this is iifi





(function printName(name){
    console.log(`Name is ${name}.`);
})("Junaid");





((name2) => {
    console.log(`Name is ${name2}.`);
})('Junaid');

