

let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

if(age < 13) {
    console.log("Child");
} else if(age < 18) {
    console.log("Teen");
} else {
    console.log("Adult");
}


let day = 1;

switch(day) {
    case 1:
        console.log("Monday")
       break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
            console.log("Wednesday");
            break;

    default:
            console.log("Invalid day");
}





for (let i=1; i<5; i++) {
    console.log(i);
}

let i=1;
while(i <= 5) {
    console.log(i);
    i++;
}


let i1 = 1;
do {
    console.log(i);
} while(i<=5);


for(let i=1; i<=5; i++) {
    if(i==3) continue;

    console.log(i);
}

let result = age >=18 ? "Adult": "Minor";

let user = {
    name: "Dhruvik",
    age: 36,
    city: "Ahmedabad"
};

for(let key in user) {
    console.log(key)
    console.log(user[key]);
}

for(let i in [10,20,30]) {
    console.log(i);
}

let fruits = ["Apple","Banana","Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

let cart = [100,200,300];

let total =0;
for(let price of cart) {
    total += price;
}

console.log(total);


let obj1 = {a: 10};
let obj2 = obj1;

obj2.a = 20;
console.log(obj1.a); // 10


let obj3 = {
    name: "Dhruvik",
    age: 36,
    address: {city: "Ahmedabad"}
}

let obj4 = {...obj3};
console.log(obj4);


obj3.age=26;
obj3.address.city = "Bangalore"
console.log(obj4);

console.log(obj3)

let obj5 = Object.assign({}, obj4);



let obj6 = JSON.parse(JSON.stringify(obj5));

let clone = structuredClone(obj6);

function createPerson (firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,

        getFullName: function() {
            return this.firstName+" "+this.lastName;
        }
    }
}

let p1 = createPerson("A","B");
let p2 = createPerson("C","D");


p1.getFullName === p2.getFullName;



const personsMethods = {
    getFullName() {
        return this.firstName + " "+this.lastName;
    }
};


 function createPerson1 (firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

let p3 = createPerson1("A","B");
p3.getFullName = personsMethods.getFullName;

let p4 = createPerson1("A","B");
p4.getFullName = personsMethods.getFullName;


//-------------------------------

const personsMethods1 = {
    getFullName() {
        return this.firstName + " "+this.lastName;
    }
};


 function createPerson2 (firstName, lastName) {
        let person = Object.create(personsMethods);
        person.firstName = firstName;
        person.lastName = lastName;

        return person;
}

//--------------------------------------
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}


Person.prototype.getFullName = function() {
    return this.firstName +" "+this.lastName;
}

let p11 = new Person("A","B");



//--------------------------Math obj
console.log(Math.PI);

console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));

console.log(Math.trunc(4.9));


console.log(Math.pow(2,3));
console.log(Math.sqrt(16));

console.log(Math.max(3,7,1));
let numss = [10,20,30]

Math.max(...numss);

Math.random(); // return 0.0 -> 0.999

Math.floor(Math.random() * 10)+1; // return 1 -> 10


Math.abs(-10); // 10

let text = "JavaScript";
console.log(text.length);

console.log("text".toUpperCase());
console.log(" hi ".trim()); // removes any spaces from both ends

console.log("JavaScript".includes("Script")); 

// startsWith() / endsWith()

"hello.js".endsWith(".js");

// Extracting parts of a string

"JavaScript".slice(0,4);
"JavaScript".substring(4,10);

//Replacing & Splitting
"Hello WOrld".replace("WOrld", "JS");
"a,a,a".replaceAll(",",";")

"red,green,blue".split(","); // Returns array

// Concatenation and Template Literals
//"Hello "+ name;

// `Hello, ${name1}!`;

let s = "JS";
s[0];
s.charAt(1);

// ${} -- EXPRESSION INTERPOLATION  

let a = 10;
let b= 20;

console.log(`Sum is ${a+b}`);

let text1 = `Hello

World`;

console.log(text1);







//====================
function add(a, b) {
    //console.log(arguments);
    return a+b;   
}

const add2= (a,b) => {
    //console.log(arguments)
    return a+b;
}

const add1 = (a,b) => a+b;

const square = x => x*x;

console.log(square(5));

let greet = () => "hello";

console.log(greet());

let nums = [1,2,3];
let squares = nums.map(n => n * n)

console.log(squares)


let nums1 = [1,2,3,4];
let even = nums1.filter(n => n%2 === 0);
console.log(even);

let nums2 = [1,2,3];

let sum = nums2.reduce( (acc, n) => acc+n, 0 )

let nums3 = [10,2,5];

nums3.sort(  (a,b)=> a-b );


let nums4 = [1,2,3,4];
console.log(nums4.splice(1, 2,99,100));
console.log(nums4);


