'use strict'

const user = require ('../models/user');

const userController = {};

userController.formCreateUser = (req, res) =>{
    res.render('users/newUserForm');
}

userController.createNewUser = async(req, res) =>{
    console.log(req.body);
    const {name, surname, dniNumber, userName, password, email, avatar, membership, membershipExpirationDate, leasedCars} = req.body;
    const newUser = new user ({name, surname, dniNumber, userName, password, email, avatar, membership, membershipExpirationDate, leasedCars});
    await newUser.save();
    res.sen('Usuario creado');
};

userController.showAllUsers = async(req, res) => {
    const listOfUsers = await user.find({}).leon();
    res.render('users/allUsers', {listOfUsers}); 
};

userController.deleteUser = async (req, res) => {
    console.log(req.params.id);
    await user.findByIdAndDelete(req.params.id);
    res.redirect('users/allUsers');
};

userController.showOneUser = async (req, res) => {
    const userDetail = await user.findById(req.params.id).lean();
    res.render('users/userDetailTemplate', {userDetail});
};

userController.updateUser = async (req, res) => {
    await user.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('users/allUsers');
};

module.exports = userController;