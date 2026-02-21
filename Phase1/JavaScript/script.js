let age = 30
let price = 99.99

console.log(age);
console.log(typeof age);


let x = 10/"a";
console.log(x);

let name = "Dhruvik";
let city = "Ahmedabad";

console.log(name);
console.log(typeof name);

let isLoggedIn = true;
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let score;
console.log(score);

console.log(typeof score);

let user = null;
console.log(user);

let big = 1234567890123456789012345678901234567890n;
console.log(big);


console.log(typeof NaN);

var a = 10;
const b = 20;

//b = 40; // This will throw an error because 'b' is a constant and cannot be reassigned.


let id = Symbol();
console.log(id);
console.log(typeof id);


let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // This will log 'false' because each Symbol is unique, even if they have the same description.

let id3 = Symbol.for("id");
let id4 = Symbol.for("id");
console.log(id3 === id4); // This will log 'true' because Symbol.for() creates a symbol in the global symbol registry, and the same symbol is returned for the same key.    



function greet() {
    console.log("Hello, World!");
}

greet(); // This will call the greet function and log "Hello, World!" to the console.

function add(a, b) {
    return a + b;
}

console.log(add(5, 10)); // This will return 15, which is the sum of 5 and 10.
console.log(add(3, 7)); // This will return 10, which is the sum of 3 and 7.

let user1 = {
    name: "Dhruvik",
    age: 30,
    city: "Ahmedabad"
};

console.log(typeof user1); // This will log 'object' because user1 is an object.
console.log(user1.name); // This will log 'Dhruvik', which is the value of the 'name' property of user1.
console.log(user1["age"]); // This will log 30, which is the value of the 'age' property of user1.


let car = {
    brand: "BMW",
    model: "X5",
    year: 2020,
    color: "Black",

    start: function() {
        console.log("Car started");
    }
}

car.start(); // This will call the start method of the car object and log "Car started" to the console.

let product = {
    name: "Laptop",
    price: 999.99,
    description: "A high-performance laptop for gaming and work."
}
console.log(product.name); // This will log 'Laptop', which is the value of the 'name' property of product.
console.log(product.price); // This will log 999.99, which is the value of the 'price' property of product.

product.price = 899.99; // This will update the price property of product to 899.99.
console.log(product.price); // This will log 899.99, which is the updated value of the 'price' property of product.

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // This will log 'Apple', which is the first element of the fruits array.
console.log(fruits[1]); // This will log 'Banana', which is the second element of the fruits array.
console.log(fruits[2]); // This will log 'Cherry', which is the third element of the fruits array.


console.log(fruits.length); // This will log 3, which is the number of elements in the fruits array.

console.log(fruits[3]);


fruits.push("Date"); // This will add "Date" to the end of the fruits array.
console.log(fruits); // This will log ["Apple", "Banana", "Cherry", "Date"], which is the updated fruits array after adding "Date".


fruits.unshift("Grape"); // This will add "Grape" to the beginning of the fruits array.
console.log(fruits); // This will log ["Grape", "Apple", "Banana", "Cherry", "Date"], which is the updated fruits array after adding "Grape" to the beginning.

fruits.pop(); // This will remove the last element ("Date") from the fruits array.
console.log(fruits); // This will log ["Grape", "Apple", "Banana", "Cherry"], which is the updated fruits array after removing the last element.    


fruits.shift(); // This will remove the first element ("Grape") from the fruits array.
console.log(fruits); // This will log ["Apple", "Banana", "Cherry"], which is the updated fruits array after removing the first element.


console.log(5==="5");


let age1 = 25;

console.log(age > 18 && age < 60);
console.log(!true);

let count =1 ;
count++;
console.log(count); // This will log 2, which is the value of count after incrementing it by 1.

let result = age1 > 18 ? "Adult" : "Minor";
console.log(result); // This will log "Adult" because age is greater than 18, so the condition in the ternary operator evaluates to true.

let name1 = "JS";

let msg = "Hello " + name1 + "!";
console.log(msg); // This will log "Hello JS!" to the console, which is the result of concatenating the string "Hello ", the value of the variable name1, and the string "!".