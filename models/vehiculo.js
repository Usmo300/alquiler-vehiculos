const { Schema, model } = require ('mongoose');

const rentcarSchema = new Schema({
    size: {
        type: Array,
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
        type: Array,
        required: true
    },

    transmissionType: {
        type: Array,
        required: true
    },

    numberOfSeats: {
        type: Array,
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
});


module.exports = model('RentCar', rentcarSchema, 'rentcars');