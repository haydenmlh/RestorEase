import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './component_styles.css'
import BookingList from "./bookingBarbers";
 
 
export default function About() {
  
  // This following section will display the table with the records of individuals.
  return (
    <div className="container">
        <div className="text about">
            <h3><span className="pink">Kim's</span> time slots</h3>
            <BookingList barber="kim"></BookingList>
        </div>
    </div>
  );
}