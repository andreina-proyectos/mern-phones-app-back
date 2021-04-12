const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
        name: { type: String, required: true},
        manufacturer: { type: String, required: true},
        description: { type: String, required: false},
        color: { type: String, required: false},
        price: { type: String, required: true},
        imageFileName: { type: String, required: true},
        screen: { type: String, required: true},
        resolution: { type: String, required: true},
        processor: { type: String, required: false},
        ram: { type: String, required: true},
        weight: { type: String, required: false},
        memory: { type: String, required: true},
        cam: { type: String, required: true},
})

module.exports = mongoose.model('Phone', phoneSchema)