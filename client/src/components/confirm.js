import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import img from '../img/RestorEase.png'
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";


function Info() {
  
  const { state } = useLocation();
  console.log(state);
  return (
    <>
    <h4>Date: {state.date}</h4>
    <h4>Time: {state.start_time}</h4>
    <h4>Barber: {capitalizeFirstLetter(state.barber)}</h4>
    </>
  )
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function confirm() {
  // This following section will display the table with the records of individuals.
  return (
    <div className="confirmation-container">
      <img src={img}></img>
      <div className="confirmation">
        <h3 className="confirmation-title">Thank you for supporting your local business!</h3>
        <h4 className="confirmation-emailed">Your booking has been emailed to the barber.</h4>
        <h4 className="confirmation-details-title">Booking Details:</h4>
        <Info></Info>
      </div>
    </div>
  );
}