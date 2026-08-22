const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expense.controller');
const auth = require('../middleware/auth.middleware');

router.get('/expenses', auth, expenseController.showForm);

module.exports = router;