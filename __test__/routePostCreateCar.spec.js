require('dotenv').config();
const mongoose = require('mongoose');
const Car = require('../models/Car');

const { MONGO_URI_TEST } = process.env;

beforeAll(() => {
    mongoose.connect(MONGO_URI_TEST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false, 
        useCreateIndex:true
    })
});

describe('POST/rentalCars/createCar', () => {
    it("It should response the POST method", async() => {
        const newCar = new Car ({ 
            motorType: 'gasoil', 
            transmissionType: '4x4', 
            doorNumber: 3, 
            seatsNumber: 3,
            carModel: 'model',
            carBrand: 'brand'
        });

        const savedCar = await newCar.save();
        const expected = 'gasoil';
        const actual = savedCar.motorType;

        expect(actual).toEqual(expected);
    
    });
});

afterAll( async () => {
    await mongoose.connection.close()
});