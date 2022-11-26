const sql = require("./db.js");

// constructor
const Reservation = function(reservation) {
  console.log('---123---')
  console.log(reservation)
  this.login_time= reservation.login_time,
  this.personal_information_enter_time=reservation.personal_information_enter_time,
  this.from_to_enter_time=reservation.from_to_enter_time,
  this.date_time_enter_time=reservation.date_time_enter_time,
  this.amount_enter_time=reservation.amount_enter_time,
  this.note_enter_time=reservation.note_enter_time,
  this.name= reservation.name,
  this.gender= reservation.gender,
  this.location_from= reservation.location_from,
  this.location_to= reservation.location_to,
  this.reservation_date=  reservation.reservation_date,
  this.reservation_time= reservation.reservation_time,
  this.amount= reservation.amount,
  this.note= reservation.note,
  this.reservation_id=reservation.reservation_id
};

Reservation.create = (newReservation, result) => {
  console.log(newReservation)
  sql.query(`SELECT * FROM reservations WHERE name = "${newReservation.name}"`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length) {
      result({ kind: "name_found" }, null);
    }else{
      sql.query("INSERT INTO reservations SET ?", newReservation, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          result(null, { id: res.insertId, ...newReservation });
        });
    }
  });
};

Reservation.findById = (id, result) => {
  sql.query(`SELECT * FROM reservations WHERE reservation_id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found reservation: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Reservation with the id
    result({ kind: "not_found" }, null);
  });
};

Reservation.deleteById = (id, result) => {
  sql.query(`DELETE FROM reservations WHERE reservation_id = ${id}`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }else{
      result();
      return;
    }
  });
};
module.exports = Reservation;
