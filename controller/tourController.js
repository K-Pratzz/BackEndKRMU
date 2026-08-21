const tourModel = require('../model/tourModel');

const getAllTours = (req, res) => {
  const tours = tourModel.getAll();
  res.json(tours);
};

const getTourById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const tour = tourModel.getById(id);
  if (tour) {
    res.status(200).json(tour);
  } else {
    res.status(404).json({ message: 'Tour not found' });
  }
};

const createTour = (req, res) => {
  const savedTour = tourModel.save(req.body);
  res.status(201).json(savedTour);
};

const updateTour = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updated = tourModel.update(id, req.body);
  if (updated) {
    res.status(200).json(updated);
  } else {
    res.status(404).json({ message: 'Tour not found' });
  }
};

const deleteTour = (req, res) => {
  const id = parseInt(req.params.id, 10); //this is to convert the id from string to number
  const tour = tourModel.getById(id);
  if (tour) {
    tourModel.Delete(id);
    res.status(200).json({ message: 'Tour deleted successfully' });
  } else {
    res.status(404).json({ message: 'Tour not found' });
  }
};

module.exports = { getAllTours, getTourById, createTour, updateTour, deleteTour };
