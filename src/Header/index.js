import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

const Header = () => (
    <div className="headerContainer" >
      <ul className="ulContainer" >
      
          <Link className="link"   to="/">
            <li className="lst" >HOME</li>
          </Link>
          <Link className="link" to="/explore">
            <li className="lst" >EXPLORE</li>
          </Link>
          <Link className="link" to="/about">
            <li className="lst" >ABOUT</li>
          </Link>
      </ul>
    </div>
);

export default Header;


