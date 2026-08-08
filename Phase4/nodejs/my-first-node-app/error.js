try {
    const result = JSON.parse("{");
} catch (error) {
    console.log("Internal server erroor: ", error.message);
}

console.log("---------------------------");

const fs = require('fs');

fs.readFile("demo1.txt", "utf8", (err, data) => {
    if(err) {
        console.log("File read error: ", err.message);
    } else {
        console.log("File data: ", data);
    }
});

console.log("---------------------------");

function fetchData() {
    return Promise.reject(new Error("Failed to fetch data"));
}

fetchData()
    .then(data => {
        console.log("Data fetched: ", data);
    })
    .catch(error => {
        console.log("Promise rejected: ", error.message);
    });
console.log("---------------------------");

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('error', (err) => {
    console.log("EventEmitter error: ", err.message);
});

emitter.emit('error', new Error("Something went wrong in EventEmitter"));