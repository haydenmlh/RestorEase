import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import './component_styles.css';
 
export default function Barber() {
  
  // This following section will display the form that takes the input from the user.
  return (
    <div className="container">
      <div className="booking">
        <h3>Select A Barber to see their times</h3>
          <div className="form-group list">
            <ul>
                <li>
                    <NavLink className="nav-link book" to="/julian">
                        Julian
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link book" to="/kim">
                        Kim
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link book" to="/lisa">
                        Lisa
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link book" to="/mark">
                        Mark
                    </NavLink>
                </li>
            </ul>

            {/* <input
              type="text"
              className="form-control"
              id="barber"
              value={form.name}
              onChange={(e) => updateForm({ barber: e.target.value })}
            /> */}
          </div>
        </div>
    </div>
  );
}