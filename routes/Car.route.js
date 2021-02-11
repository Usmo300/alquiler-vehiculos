 'use strict'

const { Router } = require ('express');
const router = Router();
const CarController = require('../controllers/carController');

const SearcherController = require('../controllers/searcherController');



router.get("/rentalCars/add", CarController.formCreateCar);

router.post("/rentalCars/createCar", CarController.createNewCar);

router.get("/rentalCars/detail/:id", CarController.showOneCar);
router.get("/rentalCars/all", CarController.showAllCars);


router.get("/rentalCars/updateCar/:id", CarController.formEditCar)

router.post("/rentalCars/updateCar/:id",CarController.updateCar);

router.get("/rentalCars/deleteCar/:id",CarController.deleteCar);


router.get("/rentalCars/addSearcher", SearcherController.formSearcher);

router.post("/rentalCars/createSearcher", SearcherController.createSearcher);


module.exports = router;