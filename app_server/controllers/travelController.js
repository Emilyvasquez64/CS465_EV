// app/controllers/travelController.js
var tripsModel = require('../models/trips');

// GET /travel
exports.list = function(req, res) {
  var category = req.query.category || 'beaches';
  var allTrips  = tripsModel.getAllTrips();
  var trips     = tripsModel.getTripsByCategory(category);

  res.render('travel', {
    title: 'Travel - Travlr Getaways',
    trips:         trips,
    category:      category,
    beachCount:    allTrips.beaches.length,
    cruiseCount:   allTrips.cruises.length,
    mountainCount: allTrips.mountains.length,
    isBeaches:     category === 'beaches',
    isCruises:     category === 'cruises',
    isMountains:   category === 'mountains'
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