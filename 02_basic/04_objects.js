// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = 1234321;
tinderUser.name = "Vihan";
tinderUser.email = "vihan@gmail.com";

// console.log(tinderUser);

const regularUser = {
    email : "ashwa@gmail.com",
    fullName : {
        username: {
            firstName : "Ashwa",
            lastName : "Patil"
        }
    }
}

//console.log(regularUser.fullName.username.firstName);

// console.log(regularUser.fullName?.username.firstName);

const target = { a: 1, b: 8 };
const source = { b: 2, c: 5 };

const returnedTarget = Object.assign(target, source);

//const returnedTarget = Object.assign({}, target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);

console.log(returnedTarget === target);
// Expected output: true



const obj1 = {a : 2, b : 4, c : 5};
const obj2 = {c : 3, f : 5, g : 4};

const obj3 = {...obj1, ...obj2};

console.log(obj3);


const users = [
    {
        id : 1,
        name : "Vihan",
        email : "vihan@gmail.com"
    },
    {
        id : 2,
        name : "Vidula",
        email : "vidula@gmail.com"
    },
    {
        id : 3,
        name : "Ashwa",
        email : "ashwa@gmail.com"
    },
    {
        id : 4,
        name : "Amar",
        email : "amar@gmail.com"
    }
]

console.log(users[0].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('emailI'));

const courses =  {
    course : "Javascriprt in js",
    price : "999",
    courseInstructor : "Vidula Patil"
}

const {courseInstructor : Instructor} = courses;

console.log(Instructor);