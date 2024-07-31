const mongoose = require('mongoose');

const cropSchema = mongoose.Schema({
    name: { type: String, required: true },
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true }
});

const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;
