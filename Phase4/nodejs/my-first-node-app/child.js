process.on("message", (message) => {
    console.log(`Received message from parent: ${message.message}`);
    process.send({ message: 'Hello parent from child.' });
});