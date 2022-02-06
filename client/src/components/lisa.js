import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './component_styles.css'
import BookingList from "./bookingBarbers";
 
 
export default function About() {
  
  // This following section will display the table with the records of individuals.
  return (
    <div className="timing-container">
        <div className="barber_bookings">
            <h3><span className="pink">Lisa's</span> bookings</h3>
            <BookingList barber="lisa"></BookingList>
        </div>
    </div>
  );
}