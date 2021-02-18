 'use strict'

const { Router } = require ('express');
const router = Router();
const CarController = require('../controllers/car.controller');
const Car = require('../models/Car');


router.get("/rentalCars/add", CarController.formCreateCar);

router.post("/rentalCars/createCar", CarController.createNewCar);

router.get("/rentalCars/detail/:id", CarController.showOneCar);

router.get("/rentalCars/all", CarController.showAllCars);

router.get("/rentalCars/updateCar/:id", CarController.formEditCar)

router.post("/rentalCars/updateCar/:id",CarController.updateCar);

router.get("/rentalCars/deleteCar/:id",CarController.deleteCar);

// router.get('/search', async (req,res) =>{
//     let cars;
//     if(req.query.q){
//                 cars = await Car.find(
//                     {$text: {
//                         $search: req.query.q
//                     }},
//                     {
//                         score: {$meta: 'textScore'}

//                     }

//                 ).sort({
//                     score: {$meta: 'textScore'}
//                 });
//     }
//     res.json(cars);
// });
router.post('/rentalcars/search', CarController.searchCar);

module.exports = router;