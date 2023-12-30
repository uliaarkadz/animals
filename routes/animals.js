const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animals");

/**
 * routes
 */

//index
router.get("/", animalController.index);

//new - get new animal form
router.get("/new", animalController.newForm);

//delete
router.delete("/:id", animalController.destroy);

//update = PUT
router.put("/:id", animalController.update);

//create = POST
router.post("/", animalController.create);

//edit  = GET idit form

router.get("/edit/:id", animalController.edit);

/**
 * SHOW
 */
router.get("/:id", animalController.show);

module.exports = router;
