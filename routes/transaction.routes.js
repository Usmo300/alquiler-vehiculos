'use strict'

const { Router } = require ('express');
const router = Router();
const TransactionController = require('../controllers/transaction.controller');
const Transaction = require('../models/Transaction');

router.get("/rentalCars/transaction/:id", TransactionController.showTransactionCar);

module.exports = router;