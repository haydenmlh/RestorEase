import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

export default function confirm() {
  
  // This following section will display the table with the records of individuals.
  return (
    <div className="container">
      <div className="wrapper-container">
          <div className="Test">
            <h3>Thank You for helping your local businesses!</h3>
            <p>Your booking has been sent.</p>
            <h3>Booking Details:</h3>
            <p>INSERT BOOKING INFO</p>
            <NavLink className="nav-link book btn" to="/">
                Home
            </NavLink>
          </div>
      </div>
    </div>
  );
}