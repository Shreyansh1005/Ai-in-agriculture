const express = require('express');
const { addCrop, getAllCrops, getCropById,updateCrop, deleteCropById } = require('../controllers/cropControllers');

const router = express.Router();

router.route('/').post(addCrop).get(getAllCrops);
router.route('/:id').get(getCropById);
router.route('/:id').put(updateCrop);
router.route('/:id').delete(deleteCropById);




module.exports = router;
