// // SIMPLE FOR LOOP
// for(let i=0; i<5; i++){
//   console.log(i)
// }


// // FOR OF LOOP
// const arr = [1, 2, 3, 4, 5]
// for(let num of arr){
//   console.log(num)
// }


// // MAPS->unique key-value pairs
// const map = new Map()
// map.set("Name", "Junaid")
// map.set("Career", "React")
// map.set("City", "Lahore")
// // console.log(map.Name);
//         // Iteration over map
// for(let [key, value] of map){
//     console.log(`${key} : ${value}`);  
// }


// ITERATION OVER OBJECTS -> we can do it using for in loop

const myObj = {
    Name: 'Junaid',
    Career: 'React',
    City: 'Lahore'
}
for (let key in myObj){
    console.log(`${key}: ${myObj[key]}`);
    
}
