import React from "react";
import './component_styles.css';
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

import img from '../img/RestorEase_transparent.png'
 
// Here, we display our Navbar
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="/">
          <div className="logo_button">
            <img src={img} style={{"width": 75}}></img>
            <h2 className="logo_text">RestorEase</h2>
          </div>
          
        {/* <img style={{"width" : 25 + '%'}} src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"></img> */}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse links" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link item book" to="/create">
                Book Now!
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}