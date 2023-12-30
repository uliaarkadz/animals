/**
 * Dependancies
 */
const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  spieces: String,
  extinct: Boolean,
  location: String,
  lifeExpectancy: Number,
});
const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
