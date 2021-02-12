'use strict'

const { Router } = require ('express');
const router = Router();
const SearcherController = require('../controllers/searcherController');


router.get("/rentalCars/addSearcher", SearcherController.formSearcher);

router.post("/rentalCars/createSearcher", SearcherController.createSearcher);


module.exports = router;