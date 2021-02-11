'use strict'

const Car = require('../models/Car');

function createCars(param){
    return new Car(param);
}

function showCars(){
    
}


module.exports = {createCars};