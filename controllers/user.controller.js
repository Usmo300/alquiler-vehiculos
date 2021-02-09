'use strict'

const user = require ('../models/user');

const userController = {};

userController.formCreateUser = (req, res) =>{
    res.render('') //rellenar con la dirección del formulario,no olvidarse.
}

userController.createNewUser = async(req, res) =>{
    console.log(req.body);
    const {name, surname, dniNumber, userName, password, email, avatar, membership, membershipExpirationDate, leasedCars} = req.body;
    const newUser = new user ({name, surname, dniNumber, userName, password, email, avatar, membership, membershipExpirationDate, leasedCars});
    await newUser.save();
    res.sen('Usuario creado');
};

module.exports = userController;