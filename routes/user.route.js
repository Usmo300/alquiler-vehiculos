'use strict'

const {Router} = require('express');
const router = Router();
const userController = require('../controllers/user.controller');

router.get("/users/add", userController.formCreateUser);

router.post("/users/createUser", userController.createNewUser);

router.get("/users/all", userController.showAllUsers);

router.get("/users/deleteUser/:id", userController.deleteUser);

router.get("/users/:id", userController.showOneUser);

router.post("/users/updateUser/:id", userController.updateUser);

module.exports = router;