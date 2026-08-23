const model = require('../models/expense.model');

exports.showForm = (req, res) => {
    res.render('form');
};

exports.createExpense = async (req, res, next) => {
    try {
        const {title, amount} = req.body;
        await model.create({
            title,
            amount,
            file: req.file ? req.file.filename : null
        })
        res.redirect('/expenses')

    } catch (error) {
        next(error);    
    }
}

exports.getExpenses = async (req, res, next) => {
    try {
        const expenses = await model.getAll()
        res.render('list', { expenses })
    } catch (error) {
        next(error);
    }
}

exports.showEditForm = async (req, res, next) => {
    try {
        const expense = await model.getById(req.params.id)
        res.render('edit', { expense })
    } catch (error) {
        next(error);
    }
}

exports.updateExpense = async (req, res, next) => {
    try {
        await model.update(req.params.id, req.body)
        res.redirect('/expenses')   
    } catch(err) {
        next(err)
    }
}

exports.deleteExpense = async (req, res, next) => {
    try {
        await model.delete(req.params.id)
        res.redirect('/expenses')
    } catch(err) {
        next(err)
    }
}
