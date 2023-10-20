const balance = new Number(1000000.21);
//console.log(balance); //[Number: 1000000]

console.log(`My Fixed Value ${balance.toFixed()}`);

// const otherValue = 1000000.78888
// console.log(otherValue.toPrecision(10));

// const mySallary = 100000;
// console.log(mySallary.toLocaleString('en-In'));

// =======================Maths====================

// console.log(Math);
// console.log(Math.abs(-4)); // negative value converted into positive value but not vice versa
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(8.4)); // 9
// console.log(Math.floor(6.7)); // 6

console.log(Math.max(1,3,7,5,8,6));

console.log(Math.random());
console.log(Math.random()*10);

console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);





