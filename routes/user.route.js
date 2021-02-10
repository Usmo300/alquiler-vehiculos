'use strict'

const {Router} = require('express');
const router = Router();
const userController = require('../controllers/user.controller');

router.get("/users/add", userController.formCreateUser);

router.post("/users/createUser", userController.createNewUser);

router.get("/users/detail/:id", userController.showOneUser);
router.get("/users/all", userController.showAllUsers);

router.get("/user/updateUser/:id", userController.formEditUser);
router.post("/users/updateUser/:id", userController.updateUser);

router.get("/users/deleteUser/:id", userController.deleteUser);

module.exports = router;