'use strict';

const {getSingleCar, carUpdate} = require('./carControllerFunct');
const {rentUpdate} = require('./rentControllerFunct');
const Rent = require('../models/Rent');

const RentController = {};

RentController.leaseCar = async (req, res) => {
    const singleCar = await getSingleCar(req.params.id);
    const Ndays = (new Date((req.body.leaseReturnDate)).getTime() - new Date((req.body.leaseDate)).getTime())/(24*60*60*1000);
    console.log(Ndays);
    const finalPrice = (singleCar.leasingPrice*Ndays);
    console.log(finalPrice);
    // const leaseReturnDate = (new Date((req.body.leaseDate)).getTime() + ((req.body.Ndays - 1)*24*60*60*1000));
    const newRent = new Rent ({carBrand: singleCar.carBrand,
        carModel: singleCar.carModel,
        leasingPrice: finalPrice,
        leaseDate: req.body.leaseDate,
        leaseReturnDate: req.body.leaseReturnDate,
        carId: singleCar._id});
        console.log(newRent);
        // if (singleCar.availability === "yes") {
       const car = await newRent.save();
       console.log(car);
        // await carUpdate(req.params.id, {availability: "no"});
 
    res.render("rent/rentDetailTemplate", {car});
    // res.redirect('/rentalcars/transactions');
};

RentController.showAllRents = async (req,res) => {
    const rentsList = await Rent.find().lean();
    rentUpdate(rentsList);
    res.render("rent/allRents", {rents: rentsList} );
};

// RentController.showOneRent = async (req, res) => {
//     const rentDetail = await getSingleRent(req.params.id);
//     res.render('rent/rentDetailTemplate', {rentDetail});
// };



module.exports = RentController;