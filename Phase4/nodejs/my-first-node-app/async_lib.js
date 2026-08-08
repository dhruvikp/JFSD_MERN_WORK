const async = require('async');

async.parallel([

    (cb) => setTimeout(() => cb(null, 'one'), 2000),
    (cb) => setTimeout(() => cb(null, 'two'), 1000)

], (err, results) => {
    if(err) {
        console.error("Error: ", err);
    } else {
        console.log("Results: ", results);
    }
});

// async series - running tasks one after another.

async.series([

    (cb) => setTimeout(() => cb(null, 'one'), 2000),
    (cb) => setTimeout(() => cb(null, 'two'), 1000)

], (err, results) => {
    if(err) {
        console.error("Error: ", err);
    } else {
        console.log("Results: ", results);
    }
});