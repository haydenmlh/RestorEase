import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './component_styles.css'
import img from '../img/RestorEase.png'
 
 
export default function Home() {
  
  // This following section will display the table with the records of individuals.
  return (
    <div className="container">
        <div className="text">
            <h3>We help <span className="pink">Restore</span> your favourite businesses with <span className="pink">Ease</span></h3>
            <p>At RestorEase, our goal is to make the transition back to in-person run more smoothly for small businesses. </p>
        </div>
        <img src={img}></img>
    </div>
  );
}