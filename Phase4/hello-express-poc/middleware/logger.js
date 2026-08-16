function logger(req, res, next) {
    console.log('Middleware function executed');
    console.log(`${req.method} - ${req.url}`);

    
    next();

    console.log('Middleware function completed');
}

module.exports = logger;