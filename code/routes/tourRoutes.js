const express = require('express');
const router = express.Router();

const tourController = require('../controller/tourController');
const {authMiddleware, restrictTo} = require('../middleware/authMiddleware');

// Apply authentication middleware to all routes
//router.use(authMiddleware);
// GET all tours
router.get('/tours', tourController.getAllTours);

// GET tours by search query
router.get('/tours/search', tourController.getToursByQuery);

// GET tour by ID
router.get('/tours/:id', tourController.getTourById);

// CREATE tour
router.post('/tours',authMiddleware,restrictTo('admin','superadmin'), tourController.saveTours);

// UPDATE tour
router.put('/tours/:id',authMiddleware, tourController.updateTour);

// DELETE tour
router.delete('/tours/:id', authMiddleware, tourController.deleteTourbyID);

module.exports = router;