module.exports = app => {
  const reservations = require("../controllers/reservation.controller.js");

  var router = require("express").Router();

  // Create a new reservation
  router.post("/create", reservations.create);

  // Retrieve a single data with id
  router.get("/:id", reservations.findOne);

  app.use('/api/reservation', router);
};
