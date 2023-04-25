import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Travel Buddy
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/profile"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                My Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/signup"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Signup
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
