import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './component_styles.css'
import img from '../img/RestorEase.png'
 
 
export default function Home() {
  
  // This following section will display the table with the records of individuals.
  return (
    <div className="home-container">
        <div className="text">
            <h3>We help <span className="pink">Restore</span> our local barbers with <span className="pink">Ease</span></h3>
            <p>With RestorEase, our goal is to allow bookings to be made more easily with barbershops, improving both the barber's and customer's experience.</p>
        </div>
        <img src={img}></img>
    </div>
  );
}