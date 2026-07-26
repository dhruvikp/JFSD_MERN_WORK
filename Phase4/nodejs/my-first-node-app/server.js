const http = require('http');


const server = http.createServer((req, res) => {

    console.log("Method :"+ req.method);
    console.log("URL :"+ req.url);
    console.log("Headers :"+ JSON.stringify(req.headers));

    // Route: Home

    if(req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(
            '<h1> Home Page </h1> <a href="/about">Go to About Page</a> <a href="/users">Users(JSON)</a><br/><a href="/old-home">Redirect example </a>'
        );
    }

    else if (req.url === "/about" && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(
            '<h1> About Page </h1> <a href="/">Go to Home Page</a>'
        );
    }

    else if (req.url === "/users" && req.method === 'GET') {
        const users = [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
            { id: 3, name: "Alice Johnson" }
        ];
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
    }

    else if (req.url === "/old-home" && req.method === 'GET') {
        res.statusCode = 301; // Permanent redirect
        res.setHeader('Location', '/');
        res.end();
    }

    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(
            '<h1> 404 Not Found </h1> <a href="/">Go to Home Page</a>'
        );
    }

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
