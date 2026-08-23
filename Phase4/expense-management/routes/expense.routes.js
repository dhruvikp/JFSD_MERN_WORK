const express = require('express');
const router = express.Router();
const multer = require('multer');

const expenseController = require('../controllers/expense.controller');
const auth = require('../middleware/auth.middleware');

const upload = multer({ dest: 'uploads/' });

router.get('/', auth, expenseController.showForm);
router.get('/expenses', auth, expenseController.getExpenses);
router.post('/expenses', auth, upload.single('receipt'), expenseController.createExpense);
router.get('/edit/:id', auth, expenseController.showEditForm);
router.post('/edit/:id', auth, expenseController.updateExpense);
router.get('/delete/:id', auth, expenseController.deleteExpense);

module.exports = router;