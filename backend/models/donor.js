const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  grainCollected: { type: Number, required: true, min: 0 }
});

module.exports = mongoose.model('Donor', donorSchema);