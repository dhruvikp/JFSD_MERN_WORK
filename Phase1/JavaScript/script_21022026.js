let str = "JavaScript";

console.log(str[0]); // Output: J
console.log(str[4]);

console.log(str[100]); // Output: undefined

//you can not modify usign index
str[0] = "Y";
console.log(str); // Output: JavaScript

str = str + "!";
console.log(str); // Output: JavaScript!

console.log("5"+2); // Output: 52
console.log("5"-2); // Output: 3


let text = "";
for(let i=0; i<1000; i++) {
    text +=  i + " ";
}

let parts = [];

for(let i=0; i<1000; i++) {
    parts.push(i);
}

let result = parts.join(" ");
console.log(result);

"hello".toUpperCase(); // Output: HELLO
"HELLO".toLowerCase(); // Output: hello

// trim, trimstart, trimend
"  hello  ".trim(); // Output: "hello"
"  hello  ".trimStart(); // Output: "hello  "
"  hello  ".trimEnd(); // Output: "  hello"

//includes
"JavaScript".includes("Script"); // Output: true

//indexOf
"JavaScript".indexOf("Script"); // Output: 4
"JavaScript".indexOf("script"); // Output: -1 (case-sensitive)

//startsWith / endsWith
"hello.js".startsWith("hello"); // Output: true
"hello.js".endsWith(".js"); // Output: true

//Extracting parts of a string
let str2 = "Hello, World!";
console.log(str2.slice(0, 5)); // Output: Hello
console.log(str2.substring(7, 12)); // Output: World

//replace content
"Hello World".replace("World", "JS"); // Output: Hello JS
"a,a,a".replaceAll(",", ";"); // Output: a;a;a

//split
"red,green,blue".split(","); // Output: ["red", "green", "blue"]

//Character access
let s = "JS";
console.log(s[0]);
console.log(s.charAt(1));

// String Interpolation
let a = 10;
let b = 20;
console.log(`Sum is ${a + b}`); // Output: Sum is 30

let text1 = `Hello


World`;
console.log(text1); // Output: Hello (newline) World

// String comparision

console.log("10" == 10); // Output: true (loose equality) -- avoid using ==

//localecompare
console.log("apple".localeCompare("banana")); // Output: -1 (apple comes before banana)
console.log("banana".localeCompare("apple")); // Output: 1 (banana comes after apple)
console.log("apple".localeCompare("apple")); // Output: 0 (both strings are equal)

let names = ["Alice", "Bob", "Charlie"];
names.sort((a, b) => a.localeCompare(b)); // Sorts names in alphabetical order
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

let ids = [10, 2, 5, 1];
ids.sort((a, b) => a - b); // Sorts numbers in ascending order
console.log(ids); // Output: [1, 2, 5, 10]

console.log("A".length); // Output: 1
console.log("😀".length); // Output: 2 (emoji is represented by two code units in JavaScript)

console.log("A".codePointAt(0)); // Output: 65 (Unicode code point for 'A')
console.log("😀".codePointAt(0)); // Output: 128512 (Unicode code point for '😀')

let emoji = "😀";
console.log(emoji.length);
console.log(emoji[0]); // Output: � (first code unit of the emoji)
console.log(emoji[1]); // Output: � (second code unit of the emoji)

for (let char of "😀🤣") {
    console.log(char); // Output: 😀 and then 🤣 (iterates over Unicode characters)
}

for(let i=0; i<"😀".length; i++)    {
    console.log("😀"[i]); // Output: � and then � (iterates over code units, not characters
    }   

   
console.log(String.fromCodePoint(128512)); // Output: 😀 (creates a string from a Unicode code point)

console.log("😀".charCodeAt(0)); // Output: 128512 (Unicode code point of the first character in the string)


// regex
let regex = /js/;
console.log(regex.test("I love js")); // Output: true

// match - Exact match
let str3 = "I love JavaScript";
console.log(str3.match(/JavaScript/)); // Output: ["JavaScript"]

// replace - Replace all occurrences
let str4 = "I love JavaScript. JavaScript is great!";
console.log(str4.replace(/JavaScript/g, "JS")); // Output: I love JS. JS is great!

//search - Search for a pattern
let str5 = "I love JavaScript";
console.log(str5.search(/JavaScript/)); // Output: 7 (index of the first match)

console.log("JS js Js".match(/js/gi)); // Output: ["JS", "js", "Js"] (case-insensitive match)

console.log("apple".match(/[aeiou]/g)); // Output: ["a", "e"] (matches all vowels in "apple")

console.log("123-456-7890".match(/\d{3}-\d{3}-\d{4}/)); // Output: ["123-456-7890"] (matches a phone number pattern)

console.log("1111111111".match(/\d{10}/)); // Output: ["1111111111"] (matches a 10-digit number pattern)

console.log("hello world".match(/^hello/)); // Output: ["hello"] (matches "hello" at the start of the string)


// encoding and decoding
console.log(encodeURIComponent("Hello World!")); // Output: Hello%20World%21
console.log(decodeURIComponent("Hello%20World%21")); // Output: Hello World!

//Base64 encoding and decoding
let originalString = "Hello, World!";
let encodedString = btoa(originalString);
console.log(encodedString); // Output: SGVsbG8sIFdvcmxkIQ==

let decodedString = atob(encodedString);
console.log(decodedString); // Output: Hello, World!    


// Passing function as an argument (callback function)
function greet(name) {
    console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
    let name = "Alice";
    callback(name);
}

processUserInput(greet); // Output: Hello, Alice!


//setTimeout
setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);

// Function returning another function (closure)
function multipler(x) {
    return function(y) {
        return x * y;
    }
}

let double = multipler(2);

/// double is a function which has x = 2 in its closure
console.log(double(5)); // Output: 10

let triple = multipler(3);
console.log(triple(5)); // Output: 15


// 
function createLogger(type) {
    return function(message) {
        console.log(`[${type}] ${message}`);
    }
}

let infoLogger = createLogger("INFO");
let errorLogger = createLogger("ERROR");

infoLogger("This is an informational message."); // Output: [INFO] This is an informational message.
errorLogger("This is an error message."); // Output: [ERROR] This is an error message.

// never use this
const add = new Function ("a", "b", "return a + b;");
console.log(add(5, 10)); // Output: 15

// Function context manipulation

function show() {
    console.log(this.name);
}

show();

// call() - Immediate execution with specified context
// fn.call(thisArgContext, arg2, arg3, ... )

show.call({ name: "Alice" }); // Output: Alice

function greet(city) {
    console.log(`Hello, ${this.name} from ${city}!`);
}

greet.call({ name: "Bob" }, "New York"); // Output: Hello, Bob from New York!
greet.call({ name: "Charlie" }, "Los Angeles"); // Output: Hello, Charlie from Los Angeles!

// apply() - Immediate execution with specified context and arguments as an array
// fn.apply(thisArgContext, [arg2, arg3, ...])

greet.apply({ name: "Dave" }, ["Chicago"]); // Output: Hello, Dave from Chicago!

// bind() - Returns a new function with specified context and optional arguments
// fn.bind(thisArgContext, arg2, arg3, ...)

let boundGreet = greet.bind({ name: "Eve" }, "Miami");
boundGreet(); // Output: Hello, Eve from Miami!