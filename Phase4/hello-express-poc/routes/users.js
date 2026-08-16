const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    console.log('Middleware function executed in users.js');
    console.log(`${req.method} - ${req.url}`);
    next();
});


router.get('/', (req, res) => {
   res.send('Users Page');
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});


module.exports = router;