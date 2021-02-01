'use strict'

const RentCar = require('../models/RentCar');

const rentCarController = {};

rentCarController.formCreateCar = (req,res)=>{
    res.render('/cars/newCarForm');
}

rentCarController.createNewCar = async(req, res) =>{
    const {size, carBrand, carModel, motorType, TransmissionType, numberOfseats, trunkSize, airConditioning, co2Emissions, carImage} = req.body;
    const newCar = new Car ({size, carBrand, carModel, motorType, TransmissionType, numberOfseats, trunkSize, airConditioning, co2Emissions, carImage});
    await newCar.save();
    res.send('coche creado');
};




module.exports = rentCarController;