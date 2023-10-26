const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
map.set("country", "USA");
map.set("salary", 100000);
map.set("job", "Software Engineer");

for (const [key, value] of map) {
   // console.log(`${key}: ${value}`);
}

const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    salary: 100000,
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}