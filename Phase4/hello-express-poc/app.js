const express = require("express")

const logger = require('./middleware/logger');
const userRouter = require('./routes/users');

const app = express();

app.set('view engine', 'pug');
app.use(logger);

app.use('/users', userRouter);


app.get('/', (req, res) => {
    console.log('GET request received for /');
    const name = req.username;

    res.render('index', {
        name: name
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

app.get('/search', (req, res) => {
    const name = req.query.name;
    res.send(`Searching for  ${name}`);
});

app.listen(3001, () => {
    console.log('Server is runnning at http://localhost:3001');
});