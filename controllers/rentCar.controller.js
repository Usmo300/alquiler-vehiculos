'use strict'

const { find } = require('../models/RentCar');
const RentCar = require('../models/RentCar');

const rentCarController = {};

rentCarController.formCreateCar = (req,res)=>{
    res.render('cars/newCarForm');
}

rentCarController.createNewCar = async(req, res) =>{
    const {transactionType, carSize, carBrand, carModel, motorType, transmissionType, numberOfSeats, trunkSize, airConditioning, co2Emissions, carImage} = req.body;
    const newCar = new RentCar ({transactionType, carSize, carBrand, carModel, motorType, transmissionType, numberOfSeats, trunkSize, airConditioning, co2Emissions, carImage});
    await newCar.save();
    res.send('coche creado');
};

rentCarController.showAllCars = async(req, res) =>{
    const listOfCars = await RentCar.find({}).lean();
    res.render('cars/allCars', {listOfCars});
};

rentCarController.showOneCar = async(req, res) =>{
    const carDetail = await RentCar.findById(req.params.id).lean();
    res.render('cars/carDetailTemplate', {carDetail});

};



module.exports = rentCarController;