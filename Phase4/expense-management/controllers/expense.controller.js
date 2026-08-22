const model = require('../models/expense.model');

exports.showForm = (req, res) => {
    res.render('form');
};
