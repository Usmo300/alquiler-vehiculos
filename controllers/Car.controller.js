'use strict'

const RentCar = require('../models/Car');

const rentCarController = {};

rentCarController.formCreateCar = (req,res)=>{
    res.render('cars/newCarForm');
}

rentCarController.createNewCar = async(req, res) =>{
    console.log(req.body);
    const {carBrand, carModel, modelYear, nextItvDate, sellingPrice, costPrice, leasingPrice, leaseDate, leaseReturnDate, carImage, carColor, seatsNumber, trunkSize, co2Emissions, carType, airConditioner, transmisionType, motorType, stock, availability} = req.body;
    const newCar = new RentCar({carBrand, carModel, modelYear, nextItvDate, sellingPrice, costPrice, leasingPrice, leaseDate, leaseReturnDate, carImage, carColor, seatsNumber, trunkSize, co2Emissions, carType, airConditioner, transmisionType, motorType, stock, availability});
    await newCar.save();
    res.send('coche creado');
};

rentCarController.showAllCars = async(req, res) =>{
    const listOfCars = await RentCar.find({}).lean();
    res.render('cars/allCars', {listOfCars});
};
rentCarController.deleteCar = async (req,res) => {
    console.log(req.params.id);
    await RentCar.findByIdAndDelete(req.params.id);
    res.send('Coche elminado');
};

rentCarController.updateCar = async(req, res) => {
    await RentCar.findByIdAndUpdate(req.params.id, req.body);
    res.send('Coche editado');
}

rentCarController.showOneCar = async(req, res) =>{
    const carDetail = await RentCar.findById(req.params.id).lean();
    res.render('cars/carDetailTemplate', {carDetail});

};



module.exports = rentCarController;