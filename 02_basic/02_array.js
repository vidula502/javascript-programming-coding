const myFamily = ["Vidula", "Amarsinh", "Ashwa", "Vihansinh"];
const parentArray = ["Vijaysinh", "Ashwaini", "Vijayrao", "Varsha"];

//const jointFamily = myFamily.push(parentArray);

//console.log(myFamily); //['Vidula','Amarsinh','Ashwa','Vihansinh',[ 'Vijaysinh', 'Ashwaini', 'Vijayrao', 'Varsha' ]]
//console.log(myFamily[4][2]);


// const jointFamily1 = myFamily.concat(parentArray);

// console.log(jointFamily1);

// const jointFamily2 = [...myFamily, ...parentArray]; //Spread array
// console.log(jointFamily2);

const score = [1, 2, 3, 4, 8, 0, 3, [3, 4, 8, 7, [2, 6, 7, 9, [7, 9]]]];

console.log(score.flat(Infinity));  //[1, 2, 3, 4, 8, 0, 3, 3, 4, 8, 7, 2, 6, 7, 9, 7, 9]

console.log(Array.isArray("Vidula"));

console.log(Array.from("Vidula"));

console.log(Array.from({name : "Vidula"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]


