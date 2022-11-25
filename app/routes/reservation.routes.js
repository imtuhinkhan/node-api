module.exports = app => {
  const reservations = require("../controllers/reservation.controller.js");

  var router = require("express").Router();

  var cors = require("cors")
  // var corsOptions = {
  //   origin: '*',
  //   optionsSuccessStatus: 200,
  // }

  var corsOptions = {
    "origin": "*",
    // "origin": "http://192.168.1.79:3000/",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
  // app.use(cors(corsOptions));

  app.use('/api/reservation', router);
  app.use(cors(corsOptions));

  // Create a new reservation
  // router.post("/create", cors(), reservations.create);
  router.post("/create", reservations.create);

  // Retrieve a single data with id
  // router.get("/:id", cors(), reservations.findOne);
  router.get("/:id", reservations.findOne);
};
