const {pipeline} = require('stream');
const fs = require('fs');

pipeline(
    fs.createReadStream("demo.txt"),
    fs.createWriteStream("output.txt"),
    (err) => {
        if(err) {
            console.error("Pipeline failed: ", err);
        } else {
            console.log("Pipeline succeeded: File has been piped from demo.txt to output.txt");
        }
    }
);