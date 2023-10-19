const name = "Ashwa";
const rollNumber = 1;
const classname = "Daisy"

console.log(name + rollNumber + classname);

console.log(`My daughter ${name} has roll number ${rollNumber} and class name ${classname}`);


// Above type of method is called string interpolation



const anyString = "Brave, Brave New World";

console.log(anyString.indexOf("Brave")); // 0
console.log(anyString.lastIndexOf("Brave")); // 7

const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.lastIndexOf("dog"));


const gameName = new String('The quick brown fox jumps over the lazy dog.');

//console.log(gameName[0]);

console.log(gameName.lastIndexOf("quick"));