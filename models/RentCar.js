const { Schema, model } = require ('mongoose');

const rentcarSchema = new Schema({
    transactionType:{
        type: String,
    },
    
    carSize: {
        type: String,
    },

    carBrand: {
        type: String,
    },

    carModel: {
        type: String,
    },

    motorType: {
        type: String,
    },

    transmissionType: {
        type: String,
    },

    numberOfSeats: {
        type: String,
    },

    trunkSize: {
        type: Number,
    },

    airConditioning: {
        type: Boolean,
    },

    co2Emissions: {
        type: Number,
    },

});


module.exports = model('RentCar', rentcarSchema, 'rentcars');