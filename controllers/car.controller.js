'use strict'

const {createCar, getSingleCar, getAllCars, carUpdate, carDelete, carSearch} = require('./carControllerFunct');
const Car = require('../models/Car');
const input = require('../data/input.json');

const CarController = {};

CarController.formCreateCar = (req,res) => {
    res.render('cars/newCarForm', {atomList:input.newCarForm});
}

CarController.createNewCar = async (req, res) => {
    await createCar(req.body);
    res.redirect('/rentalCars/all');
};

CarController.showOneCar = async (req, res) => {
    res.render('cars/carDetailTemplate', await getSingleCar(req.params.id));
};

CarController.showAllCars = async (req, res) => {
   res.render('cars/allCars', {cars: await getAllCars()});
};

CarController.formEditCar = async (req,res) => {
    res.render('cars/editCarForm', await getSingleCar(req.params.id));
}
CarController.updateCar = async (req, res) => {
    const id = req.params.id;
    const info = req.body;
    await carUpdate(id, info);
    res.redirect('/rentalCars/all');
}

CarController.deleteCar =  (req,res) => {
     carDelete(req.params.id)
     .then(res.redirect('/rentalCars/all'))
     .catch(err => {res.send(`Error al eliminar: ${err}`)});
};

CarController.searchCar = async(req,res) =>{
    const searchResult = await carSearch({$text: {$search: req.body.searchCars, $caseSensitive: false}});
    res.render('cars/allCars', {cars:searchResult});
}

CarController.renderDateForm = async (req, res) => {
    res.render('cars/DateForm', await getSingleCar(req.params.id))
};

module.exports = CarController;