const { Schema, model } = require ('mongoose');

const rentcarSchema = new Schema({
    size: {
        type: String,
        required: true
    },

    carBrand: {
        type: String,
        required: true
    },

    carModel: {
        type: String,
        required: true
    },

    motorType: {
        type: String,
        required: true
    },

    transmissionType: {
        type: String,
        required: true
    },

    numberOfSeats: {
        type: String,
        required: true
    },

    trunkSize: {
        type: Number,
        required: true
    },

    airConditioning: {
        type: Boolean,
        required: true
    },

    co2Emissions: {
        type: Number,
        required: true
    },

    carImage: {
        type: String,
        required: true
    },

    transactionType:{
        type: String,
        required: true
    },
});


module.exports = model('RentCar', rentcarSchema, 'rentcars');