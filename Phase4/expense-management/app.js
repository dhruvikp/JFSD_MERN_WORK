const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

const authRoutes = require('./routes/auth.routes');
const expenseRoutes = require('./routes/expense.routes');


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'))

app.set('view engine', 'pug');

app.use('/', authRoutes);
app.use('/', expenseRoutes);

module.exports = app;