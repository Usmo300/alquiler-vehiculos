'use strict'

const {getSingleCar} = require('./carControllerFunct');
const Transaction = require('../models/Transaction');

const TransactionController = {};

TransactionController.showTransactionCar = async (req, res) => {
    res.render('cars/transactionTemplate', await getSingleCar(req.params.id));
 };

 module.exports = TransactionController;