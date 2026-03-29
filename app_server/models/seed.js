const mongoose = require('mongoose');
const fs       = require('fs');

const dbURI = 'mongodb://127.0.0.1/travlr';

mongoose.connect(dbURI, {})
  .then(() => {
    console.log('Connected to MongoDB');

    // Define the schema directly in seed to avoid import issues
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

    const Trip = mongoose.model('trips', tripSchema);

    const trips = JSON.parse(
      fs.readFileSync('./data/trips.json', 'utf8')
    );

    return Trip.deleteMany({})
      .then(() => Trip.insertMany(trips))
      .then(() => {
        console.log(`${trips.length} trips seeded successfully!`);
        mongoose.connection.close();
      });
  })
  .catch(err => {
    console.error('Error:', err);
    mongoose.connection.close();
  });