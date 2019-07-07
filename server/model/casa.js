const mongoose = require('mongoose')
const Schema = mongoose.Schema

const casaSchema = new Schema({
    address: String,
    city: String,
    state: String, 
    zipcode: Number,
})

module.exports = mongoose.model('Casa', casaSchema);