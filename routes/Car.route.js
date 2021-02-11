 'use strict'

const { Router } = require ('express');
const router = Router();
const rentCarController = require('../controllers/Car.controller');


router.get("/rentalCars/add", rentCarController.formCreateCar);

router.post("/rentalCars/createCar", rentCarController.createNewCar);

router.get("/rentalCars/allUsers", rentCarController.showAllCars);


router.get("/rentalCars/:id", rentCarController.showOneCar);


router.get('/rentalCars/deleteCar/:id',rentCarController.deleteCar);



module.exports = router;