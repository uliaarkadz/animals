/**
 * Dependancies
 */
require("dotenv").config();
require("./config/db");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const animalRouer = require("./routes/animals");

const app = express();
const { PORT = 3013 } = process.env;

const Animal = require("./models/Animal");

/**
 * MIDDLEWARE
 */

app.use((req, res, next) => {
  req.model = {
    Animal,
  };
  console.log("this is middleware");

  // go to the next app method
  next();
});

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/public", express.static("public"));

/**
 * Routes & Router
 */

app.use("/animals", animalRouer);
/**
 * Routes & Router
 */
// app.use(prefix url, router to execute)
app.use("/animals", animalRouer);
/**
 * Server listener
 */
app.listen(PORT, () => console.log(`Listening to the sounds of ${PORT}`));
