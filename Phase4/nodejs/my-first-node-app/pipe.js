const fs = require('fs');
const { pipeline } = require('stream');

const readStream = fs.createReadStream("demo.txt");
const writeStream = fs.createWriteStream("output.txt");

pipeline(
    readStream,
    writeStream,
    (err) => {
        if(err) {
            console.error("Pipeline failed: ", err);
        } else {
            console.log("Pipeline succeeded: File has been piped from demo.txt to output.txt");
        }
    }
);

console.log("---------------------------");

const {finished} = require('stream');

const stream = fs.createReadStream("demo.txt");

finished(stream, (err) => {
    if(err) {
        console.error("Stream finished with error: ", err);
    } else {
        console.log("Stream finished successfully");
    }
});

console.log("---------------------------");

const {Readable} = require('stream');

const readableStream = Readable.from(['Hello', ' ', 'World', '!']);

readableStream.on('data', (chunk) => {
    console.log("Received chunk: ", chunk.toString());
});

readableStream.on('end', () => {
    console.log("No more data to read from the stream");
});

console.log("---------------------------");

const {addAbortSignal} = require('stream');
const controller = new AbortController();

const stream1 = fs.createReadStream("demo.txt");

addAbortSignal(controller.signal, stream1);

setTimeout(() => {
    controller.abort();
    console.log("Stream aborted after 2 seconds");
}, 2000);
