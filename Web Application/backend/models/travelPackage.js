const mongoose = require('mongoose');

const travelPackageSchema = new mongoose.Schema({
  packageName: { type: String, required: true },
  description: { type: String, required: true },
  placesToVisit: [String],
  cabServices: [String],
  hotel: { type: String, required: true },
  numberOfDays: { type: String, required: true },
  price: { type: String, required: true },
  coverImage: { type: String, required: true },
});


const TravelPackage = mongoose.model('TravelPackage', travelPackageSchema);

module.exports = TravelPackage;
