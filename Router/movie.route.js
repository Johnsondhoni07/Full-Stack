const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth.middleware");

const movieController = require("../Controller/movie.controller");

router.get("/", movieController.welcome);
router.post("/create", movieController.create);
router.put("/update/:id", auth, movieController.update);
router.delete("/delete/:id", auth, movieController.delete);
router.post("/login", (req, res) => {
  const date = new Date();
  date.setHours(date.getHours() + 5);
  res.setHeader("Set-Cookie", "isLoggedIn=true; Max-Age=600"),
    res.send("Your are logged in");
});
router.get("/logout", (req, res) => {
  res.clearCookie("isLoggedIn");
  res.send("Your are logged out");
});

module.exports = router;
