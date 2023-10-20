const myDate = new Date();
// console.log(myDate);      

// console.log(myDate.toString()); //Thu Oct 19 2023 17:19:03 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());        //Thu Oct 19 2023
// console.log(myDate.toLocaleDateString());  //10/19/2023

// console.log(myDate.toUTCString());


let myCreatedDate = new Date(2022,0,24);
console.log(myCreatedDate.toDateString()); //Mon Jan 24 2022 

//Imp Note - Month start from 0 ex. Jan - 0, Feb -1

let myCreatedDateT = new Date(2022,0,24,24,5,8);
console.log(myCreatedDateT.toLocaleString());


const mybday = Date.now();

const datecreate = new Date();
console.log(datecreate.getDay());