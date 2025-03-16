// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10

/*
SUMMARY:
=> Call back function: ye har iteration ki return value of accumulator mn save krwata rehta hai. aur last wali return value ko return krta hai.

=>INITIAL VALUE and CURRENT VALUE: reduce function sirf pehli iteration ke lye initial value ko accumulator mn save krwata hai. Agr initial value na dee gye ho to , array ki pehli value accumulator mn chali jayegi aur currentValue ke andar doosra element jayega.

*/

// ---------------------------------------------------------------------

const shoppingCart = [
    {
        item: 'JS-course',
        proce: 8999
    },
    {
        item: 'CPP-course',
        proce: 9999
    },
    {
        item: 'JAVA-course',
        proce: 10999
    },
    {
        item: 'DJANGO-course',
        proce: 11999
    },
    {
        item: 'TRADING-course',
        proce: 12999
    }
]

const payment = shoppingCart.reduce( (acc, item) => acc, item.proce, 0 )
console.log(payment);
