import React from "react";
import { NavLink } from "react-router-dom";

//styles
import "./styles/header.css";

//images
import spacexLogo from "../img/logo.png";

const header = () => {
  return (
    <header>
      <div className="parentHeader">
        <div className="logo">
          <NavLink to="/">
            <img src={spacexLogo} alt="spacexLogo" />
          </NavLink>
        </div>
        <div className="navLinks">
          <ul>
            <li>
              <NavLink to="falcon9">
                falcon
              </NavLink>
            </li>
            <li>
              <NavLink to="falconheavy">
                falcon heavy
              </NavLink>
            </li>
            <li>
              <NavLink to="dragon">
                dragon
              </NavLink>
            </li>
            <li>
              <NavLink to="starship">
                starship
              </NavLink>
            </li>
            <li>
              <NavLink to="humanspaceflight">
                human spaceflight
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="rideshare">
                rideshare
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="starNavLink">
                starLink
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default header;
