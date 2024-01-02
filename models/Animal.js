/**
 * Dependancies
 */
const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  species: String,
  extinct: Boolean,
  location: String,
  lifeExpectancy: Number,
  image: String,
});
const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
