 'use strict'

const { Router } = require ('express');
const router = Router();
const rentCarController = require('../controllers/rentCar.controller');


router.get("/rentalCars/add", rentCarController.formCreateCar);

router.post("/rentalCars/createCar", rentCarController.createNewCar);

router.get("/rentalCars/all", rentCarController.showAllCars);
router.delete('/rentalCars/deleteCar/:id',rentCarController.deleteCar);

router.get("/rentalCars/:id", rentCarController.showOneCar);

module.exports = router;