
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

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

let totalPrice = 0;

shoppingCart.forEach( (course) => {
    totalPrice += course.price;
} );
console.log(`Total of carts is ${totalPrice}`);