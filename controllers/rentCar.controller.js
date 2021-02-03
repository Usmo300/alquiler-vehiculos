'use strict'

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

rentCarController.deleteCar = async (req,res) => {
    await RentCar.findByIdAndDelete(req.params.id)
    res.send('Coche elminado')
}



module.exports = rentCarController;