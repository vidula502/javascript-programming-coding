function sayMyName() {
    console.log("V");
    console.log("I");
    console.log("D");
    console.log("U");
    console.log("L");
    console.log("A");
}
//sayMyName();

// -----function with console.log-------

// function addTwoNumber(number1, number2){
//    console.log(number1 + number2);
// }
// const result = addTwoNumber(2, 5); //7

// console.log(`Result: ${result}`); //Result: undefined

// -----------function with return value ---------------


// function userloggedIn(username){
//     return `${username} is logged in successfuly`;
// }

//const log = userloggedIn(); // undefined is logged in successfuly
//const log = userloggedIn("Vidula"); //Vidula is logged in successfuly


/*--------------------With if condition ----------------------*/


// function userloggedIn(username){
//     if(!username)
//     {
//         console.log("Please Enter Username.");
//         return;
//     }
//     return `${username} is logged in successfuly`;
// }

// const log = userloggedIn();

// console.log(log);

/*--------------------End With if condition ----------------------*/

/*--------------------With Rest operator ----------------------*/

// function calculateCartValue(...num1){
//     return num1;
// }
// console.log(calculateCartValue(200, 3000, 4000, 8888));

/*--------------------With function with object ----------------------*/

// const user = {
//     username : "Vihan fashion Collection",
//     price : 7888
// }

// function handleObject(anyObject){
//     return `product name is ${anyObject.username} with ${anyObject.price} only.`
// }

// console.log(handleObject(user));


/*--------------------With function with direct object value pass ----------------------*/

// function handleObject(anyObject) {
//     return `product name is ${anyObject.username} with ${anyObject.price} only.`
// }

// console.log(handleObject({
//     username : "Ashwa Fashion",
//     price : 999
// }));


/*--------------------With function with Array ----------------------*/

const mynewArray = [122, 8899, 6667, 4445];

function returnSecondValue(getArray){
    return getArray[2];
}

console.log(returnSecondValue(mynewArray));