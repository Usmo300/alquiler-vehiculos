  
const { Router } = require ('express');
const router = Router();

router.get('/rentalCars/add', (req,res) =>{
    res.render('/cars/newCarForm');
});