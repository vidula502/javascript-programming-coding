//singleton


//object literals

const mySymbol = Symbol("key1");

const JsUser = {
    name: "Vidula",
    "full Name": "Vidula Patil",
    email: "vidula@gmail.com",
    [mySymbol] : "Mykey1",
    age: 30,
    inLogged: false,
    location: "Pune",
    lastLoginDays: ["Monday", "Tuesday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySymbol]);

JsUser.email = "vidula502@gmail.com";

// Object.freeze();

JsUser.email = "vidula100@gmail.com";

// console.log(JsUser);

JsUser.gretings = function(){
    console.log("Hello Sweet Momies!");
}

JsUser.gretings2 = function(){
    console.log(`hellos sweet momy ${JsUser.name}`);
}

console.log(JsUser.gretings());
console.log(JsUser.gretings2());
console.log(JsUser.gretings2); //[Function (anonymous)]