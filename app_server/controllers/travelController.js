// app_server/controllers/travelController.js

const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

exports.list = async (req, res) => {
  try {
    const response = await fetch(tripsEndpoint, options);
    const json = await response.json();

    if (!json || !Array.isArray(json)) {
      return res.status(404).render('error', { message: 'No trips data returned' });
    }
    if (json.length === 0) {
      return res.status(404).render('error', { message: 'No trips found in database' });
    }

    res.render('travel', { title: 'Travel - Travlr Getaways', trips: json });
  } catch (err) {
    res.status(500).send(err.message);
  }
};