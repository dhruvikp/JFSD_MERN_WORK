const fs = require('fs');

const stream = fs.createReadStream("demo.txt");

// file is delivered on chunks
stream.on(
    "data", (chunk) => {
        console.log("New chunk received: ");
        console.log(chunk.toString());
    }
)


const data = fs.readFileSync("demo.txt");
console.log("File content read synchronously: ");
console.log(data.toString());