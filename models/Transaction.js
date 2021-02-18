const { Schema, model } = require ('mongoose');

const transactionSchema = new Schema({
    carImage: {
        type: String},
        // required:true},

    carBrand: {type: String,
        required:true},
    
    carModel: {type: String,
            required:true},
    
    leasingPrice: Number,
               
    leaseDate: {
            type: Date,
         required: true
},

    leaseTime: {
            type: String,
        required: true
},

    leaseReturnDate: {
            type: Date,
        required: true
},
    
    leaseTimeEnd: {
            type: String,
        required: true
},

    finalPrice: {
            type: Number,
        required: true
    }
});

module.exports = model('Transaction', transactionSchema, 'transactions');