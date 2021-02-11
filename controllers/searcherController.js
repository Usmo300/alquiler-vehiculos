'use strict'

const searcher = require('../models/Searcher');

const SearcherController = {};

SearcherController.formSearcher = (req,res) =>{
    res.render('searcher/dateSearcher');

}

SearcherController.createSearcher = async(req, res) =>{
    const newSearcher =  new searcher(req.body);
    await newSearcher.save();
    // res.redirect('/rentalCars/all');
    res.send("Datos búsqueda creados");
};

module.exports = SearcherController;