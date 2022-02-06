import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './component_styles.css'

 
export default function About() {
  
  // This following section will display the table with the records of individuals.
  return (
    <div className="container">
        <div className="text about">
            <h3>About <span className="pink">RestorEase</span></h3>
            <p>As the COVID-19 restictions lift, businesses like barbershops will start to see a spike in customers. With this increase, business owners will have to manage more tasks than they usual, which can seem vary daunting.</p>
            <h3><span className="pink">WE WANT TO HELP!</span></h3>
            <p>Our application allows clients to notify barbershops ahead of time when they will be coming. Barbers can then plan out their tasks more efficiently and have a more organized schedule.</p>
            <p>It's as simple as pressing book, finding the barber you plan on visiting, and selecting a time slot for when you plan to visit.</p>
        </div>
    </div>
  );
}