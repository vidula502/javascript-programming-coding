const myNums = [1 , 2, 3];


const app = myNums.reduce(function( acc, value ) {
    console.log(`${value} , ${acc} `)
    return acc + value;
}, 4);

console.log(app);

const shoppingCart = [
    { courseName : 'JavaScript', price: 100 },
    { courseName : 'HTML', price: 200 },
    { courseName : 'CSS', price: 300 },
    { courseName : 'PHP', price: 400 },
    { courseName : 'C++', price: 500 },
    { courseName : 'Java', price: 600 },
    { courseName : 'Python', price: 700 },
    { courseName : 'C#', price: 800 },
]


// const totalPrice = shoppingCart.reduce(function( acc, value ) {
//     return acc + value.price;
// }, 0);

// console.log(totalPrice);

// const totalPrice = shoppingCart.reduce((acc, value) => acc + value.price, 0);

// console.log(totalPrice);

