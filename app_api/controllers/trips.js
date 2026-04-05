// app_api/controllers/trips.js
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  code:        { type: String, required: true, index: true },
  name:        { type: String, required: true, index: true },
  length:      { type: String, required: true },
  start:       { type: Date,   required: true },
  resort:      { type: String, required: true },
  perPerson:   { type: String, required: true },
  image:       { type: String, required: true },
  description: { type: String, required: true }
});

const Trip = mongoose.models.trips || mongoose.model('trips', tripSchema);

// GET /api/trips — return all trips
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

// GET /api/trips/:tripCode — return a single trip by code
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

module.exports = { tripsList, tripsFindCode };