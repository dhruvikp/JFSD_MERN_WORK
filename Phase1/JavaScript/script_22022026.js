
let obj = {name: "JS"};

// internally:
obj.__proto__ = Object.prototype;

//console.log(obj.toString()); // Output: [object Object] (inherited from Object.prototype)

//console.log(obj.toString1());


function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

Person.prototype.sayHi = function() {
    console.log(`Hi, I'm ${this.name}`);
};

let person1 = new Person("Alice");
person1.greet(); // Output: Hello, my name is Alice
person1.sayHi(); // Output: Hi, I'm Alice




console.log(person1.constructor); // Output: [Function: Person]

// Object.getPrototypeOf(obj) is the standard way to get the prototype of an object
console.log(Object.getPrototypeOf(person1)); // Output: Person { greet: [Function], sayHi: [Function] }


// Object.prototype methods

console.log(person1.hasOwnProperty("name")); // Output: true

console.log(person1.hasOwnProperty("sayHi")); // Output: false (inherited from prototype)

// isPrototypeOf
console.log(Person.prototype.isPrototypeOf(person1)); // Output: true


 Person.prototype.toString = function() {
     return `Person: ${this.name}`;
 }

console.log(person1.toString()); // Output: Person: Alice

// toLocaleString
// Returns locale-specific string.

let date = new Date();
console.log(date.toLocaleString()); // Output: 6/26/2024, 10:00:00 AM (example output, may vary based on locale)

// valueOf
// Returns the primitive value of the specified object.

let num = new Number(42);
console.log(num.valueOf()); // Output: 42


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

promise.then((message) => {
    console.log(message); // Output: Promise resolved!
});
promise.catch((error) => {
    console.error(error);
});

promise.finally(() => {
    console.log("Promise has been settled (either resolved or rejected).");
});

console.log("A");
console.log("B");


async function test() {
    return 10;
}

// equivalant to :  Promise.resolve(10);

async function greet() {
    return "Hello, World!";
}

greet().then((message) => {
    console.log(message); // Output: Hello, World!
});


function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

async function runTask() {
    console.log("Task started");
    await delay(2000); // Wait for 2 seconds
    console.log("Task completed after 2 seconds");
}

runTask();

var square = function(x) {
    return x * x;
};

// coffeeScript style
var square = (x) => x * x;


// flow syntax for add two numbers
var add = (a, b) => a + b;

console.log(add(5, 10)); // Output: 15



console.log([] != []); // Output: true (different references)