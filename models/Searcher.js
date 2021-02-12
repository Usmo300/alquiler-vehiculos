const { Schema, model } = require ('mongoose');

const searcherSchema = new Schema({
    leaseDate: Date,

    leaseTime: String,

    leaseReturnDate: Date,
    
    leaseTimeEnd: String,

    place: String,
    
    placeEnd: String,

    carSize: String,

});

module.exports = model('Searcher', searcherSchema);

// const Searcher = model('Searcher', searcherSchema);
// module.exports = Searcher;