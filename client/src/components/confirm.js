import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";


function Info() {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
    <p>Date: {state.date}</p>
    <p>Time: {state.start_time}</p>
    <p>Barber: {capitalizeFirstLetter(state.barber)}</p>
    </>
  )
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function confirm() {
  
  // This following section will display the table with the records of individuals.
  return (
    <div className="container">
      <div className="wrapper-container">
          <div className="Test">
            <h3>Thank You for helping your local businesses!</h3>
            <p>Your booking has been sent.</p>
            <h3>Booking Details:</h3>
            <Info></Info>
            <NavLink className="nav-link book btn" to="/">
                Home
            </NavLink>
          </div>
      </div>
    </div>
  );
}