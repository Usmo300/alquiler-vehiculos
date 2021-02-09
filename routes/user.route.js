'use strict'

const {Router} = require('express');
const router = Router();
const userController = require('../controllers/user.controller');

router.get("/users/add", userController.formCreateUser);

router.post("/user/createUser", userController.createNewUser);

module.exports = router;