module.exports = app => {
  const reservations = require("../controllers/reservation.controller.js");

  var router = require("express").Router();

  app.use('/api/reservation', router);

  // Create a new reservation
  // router.post("/create", cors(), reservations.create);
  router.post("/create", reservations.create);

  // Retrieve a single data with id
  // router.get("/:id", cors(), reservations.findOne);
  router.get("/:id", reservations.findOne);

  // Delete a single data with id
  router.delete("/delete/:id", reservations.delete);
};
