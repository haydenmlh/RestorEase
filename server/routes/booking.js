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

// This section will get a list of all the bookings for a single barber.
bookingRoutes.route("/booking/barber").post(function (req, res) {
  console.log("[POST] all bookings one barber");
  let db_connect = dbo.getDb();
  let myquery = { barber: req.body.barber };
  console.log(req.body.barber);
  db_connect
    .collection("booking")
    .find(myquery)
    .sort({date: 1, start_time: 1})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
});

// This section will get a list of all the bookings on a single date for a 
// single barber.
bookingRoutes.route("/booking/one_date").post(function (req, res) {
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
  let mySearch = {
    date: req.body.date,
    start_time: req.body.start_time,
    barber: req.body.barber
  }
  db_connect.collection("booking").find(mySearch).toArray(function(err, result) {
    console.log(result);
    if (result) {
      console.log("Existing record with same date and time for this barber found.");
      response.status(400);
      return;
    }
  })
  
  const nodemailer = require('nodemailer');

  let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "53f7cb2c1f02e4",
      pass: "5b58a1d7969710"
    }
  });
  const message = {
    from: 'restorease@gmail.com', // Sender address
    to: 'bussiness@gmail.com',         // List of recipients
    subject: 'NEW BOOKING', // Subject line
    text: 'This is an automated email to notify the receiver a new booking has been requested.' // Plain text body
  };

  transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
  });
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
      client_username: req.body.client_username,
      barber: req.body.barber,
      barber_email: req.body.barber_email
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