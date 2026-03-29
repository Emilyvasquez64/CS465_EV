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

// Check if model already exists before creating it
const Trip = mongoose.models.trips || mongoose.model('trips', tripSchema);

// GET /travel
exports.list = function(req, res) {
  Trip.find({})
    .then(trips => {
      res.render('travel', {
        title: 'Travel - Travlr Getaways',
        trips: trips
      });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};

// GET /travel/:id
exports.detail = function(req, res) {
  Trip.findOne({ code: req.params.id })
    .then(trip => {
      if (!trip) {
        return res.status(404).render('error', { message: 'Trip not found' });
      }
      res.render('tripDetail', { title: trip.name, trip: trip });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};