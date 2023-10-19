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


//+++++++++++++++++++++++++++++++Memory++++++++++++++++++++++++++++++++++++

//Stack => Primitive
//Heap => Non Primitive


let myYoutubechannelName = "Ashwa";
let mySecondyoutubeChannel = myYoutubechannelName;
mySecondyoutubeChannel = "Vihan";

console.log(mySecondyoutubeChannel); // Vihan
console.log(myYoutubechannelName); // Ashwa

//Note - In Stack Memory, just make copy of variables, not change in original value

const myInfo = { name : "Vidula", password : "Ashwa@502Vihan"}
const mydetailInfo = myInfo;

mydetailInfo.password = "Vidula@502Amar";

console.log(mydetailInfo.password); // Vidula@502Amar
console.log(myInfo.password); // Vidula@502Amar

mydetailInfo.password = "Vidula@502Amar122";

console.log(mydetailInfo.password); // Vidula@502Amar
console.log(myInfo.password); // Vidula@502Amar

//Note - In Heap Memory, two objects has same referance, once one object value is changed, automaticaly change the value for another