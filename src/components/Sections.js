import React from "react";

//imports from react-router-dom
import {Link} from 'react-router-dom'

//import styles
import "../pages/pages_Styling/Home.css"

import Background from '../img/section-a.webp'



const Sections = () => {
  return (
    
    <div className="parentHome" style={{backgroundImage: "url(" + Background + ")"}}>
      <div className="innerSection">
        <h4>Upcomming Launch</h4>
        <h2>CRS-25 Mission</h2>
        <Link to='/falcon9' className="btn">
          <div className="hover"></div>
          <span>Review</span>
        </Link>
      </div>
      <div class="scroll-arrow">
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            stroke-width="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Sections;
