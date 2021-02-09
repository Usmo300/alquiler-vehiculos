 'use strict'

const { Router } = require ('express');
const router = Router();
const rentCarController = require('../controllers/Car.controller');


router.get("/rentalCars/add", rentCarController.formCreateCar);

router.post("/rentalCars/createCar", rentCarController.createNewCar);

router.get("/rentalCars/all", rentCarController.showAllCars);

router.get("/rentalCars/deleteCar/:id",rentCarController.deleteCar);

router.get("/rentalCars/updateCar/:id",rentCarController.updateCar);

router.get("/rentalCars/:id", rentCarController.showOneCar);


module.exports = router;