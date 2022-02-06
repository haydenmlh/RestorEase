import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import './component_styles.css';
import GoogleMap from './GoogleMap';
 
export default function Barber() {
  
  // This following section will display the form that takes the input from the user.
  return (
    <div className="timing-container">
      <div className="barber-timings">
        <h4>Click on a barber to see their bookings</h4>
        <div className="barber-buttons-wrap">
          
          <NavLink className="barber-buttons" to="/julian">
              Julian
          </NavLink>
      
          <NavLink className="barber-buttons" to="/kim">
              Kim
          </NavLink>
      
          <NavLink className="barber-buttons" to="/lisa">
              Lisa
          </NavLink>
      
          <NavLink className="barber-buttons" to="/mark">
              Mark
          </NavLink>
            
            
        </div>      
      </div>
      <div className="map">
          <GoogleMap />
      </div>
    </div>
  );
}