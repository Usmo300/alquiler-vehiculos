'use strict'

const {createCars} = require('./carControllerFunct');
const Car = require('../models/Car');

const CarController = {};

CarController.formCreateCar = (req,res)=>{
    res.render('cars/newCarForm');
}

CarController.createNewCar = async(req, res) =>{
    // console.log(req.body);
    // const {carBrand, carModel, modelYear, nextItvDate, sellingPrice, costPrice, leasingPrice, leaseDate, leaseReturnDate, carImage, carColor, seatsNumber, trunkSize, co2Emissions, carType, airConditioner, transmisionType, motorType, stock, availability} = req.body;
    // const newCar = new Car({carBrand, carModel, modelYear, nextItvDate, sellingPrice, costPrice, leasingPrice, leaseDate, leaseReturnDate, carImage, carColor, seatsNumber, trunkSize, co2Emissions, carType, airConditioner, transmisionType, motorType, stock, availability});
    
    console.log(req.body);
    await createCars(req.body).save();
    res.redirect('/rentalCars/all');
};

CarController.showOneCar = async(req, res) =>{
    const carDetail = await Car.findById(req.params.id).lean();
    res.render('cars/carDetailTemplate', {carDetail});
};

CarController.showAllCars = async(req, res) =>{
    const listOfCars = await Car.find({}).lean();
    res.render('cars/allCars', {listOfCars});
};

CarController.formEditCar = async (req,res) => {
    const carDetail = await Car.findById(req.params.id).lean();
    res.render('cars/editCarForm', {carDetail});
}
CarController.updateCar = async(req, res) => {
    await Car.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/rentalCars/all');
}

CarController.deleteCar = async (req,res) => {
    await Car.findByIdAndDelete(req.params.id);
    res.redirect('/rentalCars/all');
};


module.exports = CarController;