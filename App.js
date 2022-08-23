require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const movieRoute = require("./Router/movie.route");

const mongoDb = process.env.MONGO_URL;
const connection = async () => {
  try {
    mongoose.connect(mongoDb);
    console.log("connected To MongoDb");
  } catch (error) {
    console.log(error);
  }
};
connection();
app.use(express.json());
app.use("/movie", movieRoute);
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(process.env.PORT, () => {
  console.log("server starts in port " + process.env.PORT);
});
