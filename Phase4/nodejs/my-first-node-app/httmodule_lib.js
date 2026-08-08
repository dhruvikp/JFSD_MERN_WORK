const http = require('http');

http.get('http://www.google.com', (res) => {
    console.log(`Got response: ${res.statusCode}`);
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});