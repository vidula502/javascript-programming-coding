// Primitive Datatypes
// String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100;
// const scoreInNumber  = 100.3;

// const isLoggedIn = true;
// const outSideTemp = null;
// let userEmail;

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id === anotherId);

// const BigInt = 1234478654278973n;




//Referance or Non Primitive
//Array, Objects, Functions

const heros = ["Shaktiman" , "Spiderman", "Superman", "Captain America"];

console.log(typeof heros); // Object

const obj = {
    name : "Vidula",
    age : 23,
    gender: "Female"
}
console.log(typeof obj); // object
const myfunction = function(){
    console.log("Hello World");
}
console.log(typeof myfunction); // function