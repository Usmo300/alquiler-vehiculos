'use strict'


const Transaction = require('../models/Transaction');

const TransactionController = {};

TransactionController.showTransactionCar = async (req, res) => {
    res.render('cars/transactionTemplate');
 };

 module.exports = TransactionController;