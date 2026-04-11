const mongoose = require('mongoose');
const Trip = require('../models/travlr');

// GET /api/trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    if (!trips || !Array.isArray(trips)) {
      return res.status(404).json({ message: 'No trips found' });
    }
    if (trips.length === 0) {
      return res.status(404).json({ message: 'No trips found in database' });
    }
    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// GET /api/trips/:tripCode
const tripsFindCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// POST /api/trips
const tripsAddTrip = async (req, res) => {
  try {
    const trip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });
    return res.status(201).json(trip);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// PUT /api/trips/:tripCode
const tripsUpdateTrip = async (req, res) => {
  try {
    const q = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true }
    );
    if (!q) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    return res.status(201).json(q);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// DELETE /api/trips/:tripCode
const tripsDeleteTrip = async (req, res) => {
  try {
    const q = await Trip.findOneAndDelete({ code: req.params.tripCode });
    if (!q) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    return res.status(204).json(q);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { tripsList, tripsFindCode, tripsAddTrip, tripsUpdateTrip, tripsDeleteTrip };