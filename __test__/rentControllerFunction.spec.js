require('dotenv').config();
const mongoose = require('mongoose');
const Rent = require('../models/Rent');

const  { MONGO_URI_TEST } = process.env;

beforeAll(() => {
    mongoose.connect(MONGO_URI_TEST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false, 
        useCreateIndex:true
    })
});

describe('POST/rentalCars/leaseCar/:id', () => {
    it("It should response the POST method", async() => {
    const newRent = new Rent ({ 
        carModel: 'seat',
        carBrand: 'brand'
    });

        const savedRent = await newRent.save();
        const expected = 'seat';
        const actual = savedRent.carModel;

        expect(actual).toEqual(expected);
    });

    it("It should response the POST method", async() => {
        const newRent = new Rent ({ 
            carModel: 'seat',
            carBrand: 'brand'
        });
    
        const savedRent = await newRent.save();
        const expected = 'model';
        const actual = savedRent.carModel;
    
        expect(actual).not.toEqual(expected);
    });    
});

afterAll( async () => {
    await mongoose.connection.close();
});