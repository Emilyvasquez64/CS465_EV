// app/models/trips.js

var trips = {
  beaches: [
    { id: 'B0101', name: 'Cancun',        length: '4 nights / 5 days', start: 'Feb 14, 2021', resort: 'Emerald Bay, 3-stars',     perPerson: '$799.00'  },
    { id: 'B0103', name: 'Barbados',       length: '5 nights / 6 days', start: 'Feb 28, 2021', resort: 'Castaway Cove, 4-stars',   perPerson: '$1299.00' },
    { id: 'B0401', name: 'Panama City',    length: '4 nights / 5 days', start: 'Mar 21, 2021', resort: 'Sunseeker Surf, 4-stars',  perPerson: '$1199.00' },
    { id: 'B0701', name: 'Tahiti',         length: '6 nights / 7 days', start: 'Mar 28, 2021', resort: 'Hedonist Heaven, 5-stars', perPerson: '$1799.00' },
    { id: 'B0901', name: 'French Riviera', length: '5 nights / 6 days', start: 'Apr 11, 2021', resort: 'Chateau Royal, 5-stars',   perPerson: '$2499.00' }
  ],
  cruises: [
    { id: 'C0201', name: 'Caribbean Getaway',    length: '7 nights / 8 days',  start: 'Mar 05, 2021', resort: 'Royal Seas Liner, 4-stars',   perPerson: '$1499.00' },
    { id: 'C0302', name: 'Mediterranean Voyage', length: '10 nights / 11 days', start: 'Apr 10, 2021', resort: 'Azure Dream Cruise, 5-stars', perPerson: '$2999.00' },
    { id: 'C0504', name: 'Alaskan Expedition',   length: '6 nights / 7 days',  start: 'Jun 18, 2021', resort: 'Northern Star Ship, 4-stars', perPerson: '$1899.00' },
    { id: 'C0605', name: 'Norwegian Fjords',     length: '8 nights / 9 days',  start: 'Jul 22, 2021', resort: 'Viking Horizon, 5-stars',     perPerson: '$2599.00' }
  ],
  mountains: [
    { id: 'M0101', name: 'Swiss Alps',       length: '5 nights / 6 days',  start: 'Jan 10, 2021', resort: 'Chalet Blanc, 5-stars',       perPerson: '$2199.00' },
    { id: 'M0202', name: 'Rocky Mountains',  length: '4 nights / 5 days',  start: 'Feb 20, 2021', resort: 'Summit Lodge, 3-stars',        perPerson: '$999.00'  },
    { id: 'M0303', name: 'Patagonia Trek',   length: '7 nights / 8 days',  start: 'Mar 15, 2021', resort: 'Andean Base Camp, 4-stars',    perPerson: '$1699.00' },
    { id: 'M0404', name: 'Himalayas Base',   length: '9 nights / 10 days', start: 'Apr 05, 2021', resort: 'Everest View Hotel, 5-stars',  perPerson: '$3499.00' },
    { id: 'M0505', name: 'Dolomites Escape', length: '5 nights / 6 days',  start: 'May 12, 2021', resort: 'Rifugio Alpino, 4-stars',      perPerson: '$1399.00' },
    { id: 'M0606', name: 'Canadian Rockies', length: '6 nights / 7 days',  start: 'Jun 28, 2021', resort: 'Banff Springs, 5-stars',       perPerson: '$2299.00' }
  ]
};

exports.getAllTrips = function() { return trips; };

exports.getTripsByCategory = function(category) {
  return trips[category] || [];
};

exports.getTripById = function(id) {
  var categories = Object.values(trips);
  for (var i = 0; i < categories.length; i++) {
    var found = categories[i].find(function(t) { return t.id === id; });
    if (found) return found;
  }
  return null;
};