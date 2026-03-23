var fs = require('fs');
var tripsModel = require('../models/trips');

// GET /travel
exports.list = function(req, res) {
  var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

  res.render('travel', {
    title: 'Travel - Travlr Getaways',
    trips: trips
  });
};

// GET /travel/:id
exports.detail = function(req, res) {
  var trip = tripsModel.getTripById(req.params.id);
  if (!trip) {
    return res.status(404).render('error', { message: 'Trip not found' });
  }
  res.render('tripDetail', { title: trip.name, trip: trip });
};