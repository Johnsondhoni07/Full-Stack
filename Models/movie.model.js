const mongoose = require("mongoose");

const schema = mongoose.Schema;

const movieSchema = new schema({
  MovieName: { type: String, required: true, max: 100 },
  Rating: { type: Number, required: true },
  Cast: { type: [], required: true },
  Genre: { type: String, required: true },
  ReleaseDate: { type: Date, required: true },
});

module.exports = mongoose.model("Movie", movieSchema);
