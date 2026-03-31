// models/herb.js

const mongoose = require('mongoose');

const HerbSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  benefits: { type: [String] },
  usage: { type: String }
});

module.exports = mongoose.model('Herb', HerbSchema);