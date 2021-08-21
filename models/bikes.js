const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BikesSchema = new Schema({
    bikeName: {
        type: String,
        required: true
    },
    bikeManufacture: {
        type: String,
        required: true
    },
    bikeSales: {
        type: String,
        required: true
    }
});

const bikes = mongoose.model('bikes', BikesSchema);

module.exports = bikes;