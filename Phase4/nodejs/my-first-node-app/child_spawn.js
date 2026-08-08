const {spawn} = require('child_process');

// span a child process
const child = spawn("ls", ["-lh", "/usr"]);



// stream the standard output (stdout) form the child process

child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
});

child.on("error", (error) => {
    console.error(`Error spawning child process: ${error.message}`);
});

child.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
});