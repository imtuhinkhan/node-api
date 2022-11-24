const Reservation = require("../models/reservation.model.js");

// Create and Save a new Reservation
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  let reservationId = Math.floor(Math.random() * 10000000000);
  console.log(reservationId);
  // Create a Reservation
  const reservation = new Reservation({
    login_time: req.body.login_time,
		personal_information_enter_time:req.body.personal_information_enter_time,
		from_to_enter_time:req.body.from_to_enter_time,
		date_time_enter_time:req.body.date_time_enter_time,
		amount_enter_time:req.body.amount_enter_time,
		note_enter_time:req.body.note_enter_time,
		name: req.body.name,
		gender: req.body.gender,
		location_from: req.body.location_from,
		location_to: req.body.location_to,
		reservation_date:  req.body.reservation_date,
		reservation_time: req.body.reservation_time,
		amount: req.body.amount,
		note: req.body.note,
    reservation_id:reservationId
  });

  // Save Reservation in the database
  Reservation.create(reservation, (err, data) => {
    if (err)
      if (err.kind === "name_found") {
        res.status(400).send({
          message:
            err.message || "Name already exists."
        });
      }else{
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Reservation."
        });
      }
      
    else res.send(data);
  });
};


// Find a single Reservation by Id
exports.findOne = (req, res) => {
  Reservation.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Reservation with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Reservation with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};