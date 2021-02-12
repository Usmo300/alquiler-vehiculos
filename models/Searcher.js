const { Schema, model } = require ('mongoose');

const searcherSchema = new Schema({
    leaseDate: Date,

    leaseTime: String,

    leaseReturnDate: Date,
    
    leaseTimeEnd: String

});

module.exports = model('Searcher', searcherSchema);

// const Searcher = model('Searcher', searcherSchema);
// module.exports = Searcher;