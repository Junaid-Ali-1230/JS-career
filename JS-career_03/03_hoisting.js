// Legal = >While defining functions like this, it gives us previlege that we can call the function before defining it.
addOne(5)
function addOne(num) {
    return num + 1
}


// Illegal => While declaring functions like this, we cant do so. These types of functions are also called expressions.
addTwo(5)
const addTwo = function(num){
    return num + 2
}