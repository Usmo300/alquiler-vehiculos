 'use strict'

const { Router } = require ('express');
const router = Router();
const rentCarController = require('../controllers/rentCar.controller');


router.get("/rentalCars/add", rentCarController.formCreateCar);

router.post("/rentalCars/createCar", rentCarController.createNewCar);



module.exports = router;