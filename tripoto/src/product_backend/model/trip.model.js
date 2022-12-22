const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  category: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  image: { type: String, require: true },
  by: { type: String },
  price: { type: Number },
  locations: { type: String },
  places: { type: String },
  description: { type: String },
  section: { type: String },
  Tag: { type: String },
});

const TripModel = mongoose.model("trip", tripSchema);
module.exports = { TripModel };
