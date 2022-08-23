const movie = require("../Models/movie.model");

const user = {};

exports.welcome = (req, res) => {
  res.status(200).send({ message: "Welcome" });
};

exports.create = async (req, res) => {
  const moviecreate = new movie(req.body);
  try {
    const createdMovie = await moviecreate.save();
    res.status(200).send({
      movieId: createdMovie._id,
      message:
        "Movie Created Sucessfully. Use this id to delete or update movie",
    });
  } catch (err) {
    res.status(500).send("Failed to Create");
  }
};

exports.update = async (req, res) => {
  try {
    const movieInstance = await movie.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (movieInstance) res.status(200).send({ message: "SucessFully Updated" });
    // else res.status(404).send({ message: "Movie Not Found" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.delete = async function (req, res) {
  try {
    const movieInstance = await movie.findById(req.params.id);
    if (!movieInstance) {
      res.status(404).send({ message: "Movie Not Found" });
    } else {
      movieInstance.remove();
      res.status(200).send({ message: "Movie Removed SucessFully" });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
