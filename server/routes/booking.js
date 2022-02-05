const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests 
// starting with path /booking.
const bookingRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will get a list of all the bookings.
bookingRoutes.route("/booking").get(function (req, res) {
  console.log("[GET] all bookings");
  let db_connect = dbo.getDb();  
  db_connect
    .collection("booking")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      // console.log(result);
      res.json(result);
    });
});

// This section will get a list of all the bookings on a single date for a 
// single barber.
bookingRoutes.route("/booking/one_date").get(function (req, res) {
  console.log("[GET] all bookings single date");
  let db_connect = dbo.getDb();
  let myquery = { date: req.body.date };
  db_connect
    .collection("booking")
    .find(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      // console.log(result);
      res.json(result);
    });
});

// This section will help you get a single record by id
bookingRoutes.route("/booking/:id").get(function (req, res) {
  console.log("[GET] single booking");
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("booking")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
bookingRoutes.route("/booking/add").post(function (req, response) {
  console.log("[POST] add booking");
  let db_connect = dbo.getDb();
  let myobj = {
    date: req.body.date,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    client_username: req.body.client_username,
    barber: req.body.barber
  };
  // console.log(req.body)
  // console.log(req.body.name);
  db_connect.collection("booking").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
bookingRoutes.route("/booking/update/:id").post(function (req, response) {
  console.log("[POST] update booking");
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      date: req.body.date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      client_username: req.body.client_username,
      barber: req.body.barber
    },
  };
  db_connect
    .collection("booking")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
bookingRoutes.route("/booking/delete/:id").delete((req, response) => {
  console.log("[DELETE] delete booking");
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("booking").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
});

module.exports = bookingRoutes;