const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apply'
}

// for (const key in myObject) {
//     console.log(`${key} : ${myObject[key]}`);
// }

// ----------------------------------------------------------

const programming = ['js', 'python', 'java', 'cpp']

// for (const key in programming) {
//     console.log(`${key} : ${programming[key]}`)
// }

// -------------------------------------------------------

// const map = new Map()
// map.set('PK', 'Pakistan')
// map.set('IN', 'India')
// map.set('FR', 'France')
// map.set('IT', 'Italy')

// for (const key in map) {
//     console.log(`${key}: ${map[key]}`);
// }
// // map donot work with for-in loop


// -------------------------------------------------------

const myNums = [1, 2, 3, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4 )
// // const newNums = myNums.filter( (num) => { return num > 4} )  //if we use scope operator{}, we have to use return keywork also
// console.log(newNums);


// if you f]dont want to use filter() func, there is another way too
const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

// console.log(newNums);

// -------------------------------------------------------

const books = [
  { title: "The Great Gatsby", genre: "Fiction", publish: 1925, edition: "First" },
  { title: "To Kill a Mockingbird", genre: "Classic", publish: 1960, edition: "Second" },
  { title: "1984", genre: "Dystopian", publish: 1949, edition: "First" },
  { title: "Pride and Prejudice", genre: "Romance", publish: 1813, edition: "Third" },
  { title: "Moby Dick", genre: "Adventure", publish: 1851, edition: "First" },
  { title: "The Catcher in the Rye", genre: "Classic", publish: 1951, edition: "First" },
  { title: "Brave New World", genre: "Science Fiction", publish: 1932, edition: "Second" },
  { title: "The Hobbit", genre: "Fantasy", publish: 1937, edition: "First" },
  { title: "Fahrenheit 451", genre: "Dystopian", publish: 1953, edition: "First" },
  { title: "Jane Eyre", genre: "Classic", publish: 1847, edition: "Second" },
  { title: "The Lord of the Rings", genre: "Fantasy", publish: 1954, edition: "First" },
  { title: "The Alchemist", genre: "Philosophical", publish: 1988, edition: "First" },
  { title: "Crime and Punishment", genre: "Psychological Fiction", publish: 1866, edition: "First" },
  { title: "The Odyssey", genre: "Epic", publish: -700, edition: "Ancient" },
  { title: "Frankenstein", genre: "Gothic Fiction", publish: 1818, edition: "First" }
]

const userBooks = books.filter( (bk) => bk.genre === 'Fantasy' )
// const userBooks = books.filter( (bk) => bk.publish >= 1950 )
// const userBooks = books.filter( (bk) => 
//     bk.publish >= 1950 && bk.genre === 'Fantasy' 
// )

// console.log(userBooks);

// ----------------------------------------------------------------
// =>ques: i want to add 10 in each num using map

const myNumbers = [1, 2, 3, 5, 6, 7, 8, 9, 10]
// const newNumbers = myNumbers.map( (num) => num + 10 )
// console.log(newNumbers);


// --------------------------Chaining--------------------------------------
/*
 kya 2 function, jese keh map aur filter, aik sath use ho skte hain?
HAN! isi ko chaining kehte hain.
ques => myNumbers ki array ke har number ko pehle 3 se multiply kro aur uske bad jo number 20 se bra ho usko return krwa do
*/

const nums = myNumbers
                    .map( (num) => num * 3 )
                    .filter( (num) => num > 20 )

console.log(nums);

// ----------------------------------------------------------------
