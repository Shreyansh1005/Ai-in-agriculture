const Crop = require('../models/crops');

const addCrop = async (req, res) => {
    const { name, temperature, humidity } = req.body;

    const crop = new Crop({ name, temperature, humidity });

    const createdCrop = await crop.save();
    res.status(201).json(createdCrop);
};

const getAllCrops = async (req, res) => {
    try {
        const crops = await Crop.find({});
        res.json(crops);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getCropById = async (req, res) => {
    try {
        const crop = await Crop.findById(req.params.id);

        if (crop) {
            res.json(crop);
        } else {
            res.status(404).json({ message: 'Crop not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateCrop = async (req, res) => {
    const { name, temperature, humidity } = req.body;
    const crop = await Crop.findById(req.params.id);

    if (crop) {
        crop.name = name;
        crop.temperature = temperature;
        crop.humidity = humidity;

        const updatedCrop = await crop.save();
        res.json(updatedCrop);
    } else {
        res.status(404).json({ message: 'Crop not found' });
    }
};

const deleteCropById = async (req, res) => {
    try {
        const crop = await Crop.findByIdAndDelete(req.params.id);
        if (crop) {
            res.json({ message: 'Crop deleted' });
        } else {
            res.status(404).json({ message: 'Crop not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addCrop, getAllCrops, getCropById, updateCrop, deleteCropById };



