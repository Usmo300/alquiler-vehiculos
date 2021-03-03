'use strict';

const {getSingleCar, carUpdate} = require('./carControllerFunct');
const {rentUpdate} = require('./rentControllerFunct');
const Rent = require('../models/Rent');

const RentController = {};

RentController.leaseCar = async (req, res) => {
    const singleCar = await getSingleCar(req.params.id);
    const finalPrice = (singleCar.leasingPrice*req.body.Ndays);
    const leaseReturnDate = (new Date((req.body.leaseDate)).getTime() + ((req.body.Ndays - 1)*24*60*60*1000));
    const newRent = new Rent ({carBrand: singleCar.carBrand,
        carModel: singleCar.carModel,
        leasingPrice: finalPrice,
        leaseDate: req.body.leaseDate,
        leaseReturnDate: leaseReturnDate,
        carId: singleCar._id});
    if (singleCar.availability === "yes") {
        await newRent.save();
        await carUpdate(req.params.id, {availability: "no"});
    }
    res.redirect("/rentalcars/all");
};

RentController.showAllRents = async (req,res) => {
    const rentsList = await Rent.find().lean();
    rentUpdate(rentsList);
    res.render("rent/allRents", {rents: rentsList} );
};



module.exports = RentController;