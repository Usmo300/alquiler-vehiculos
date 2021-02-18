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

    leaseReturnDate: {
            type: Date,
        required: true
},

    finalPrice: {
            type: Number,
        required: true
    },

    place: String
    
});

module.exports = model('Transaction', transactionSchema, 'transactions');