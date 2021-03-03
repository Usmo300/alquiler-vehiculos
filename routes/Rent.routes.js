'use strict'

const { Router } = require ('express');
const router = Router();
const RentController = require('../controllers/rent.controller');

router.post("/rentalCars/leaseCar/:id", RentController.leaseCar);

router.get("/rentalCars/transactions", RentController.showAllRents);

module.exports = router;