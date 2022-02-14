import React from "react";
import { NavLink } from "react-router-dom";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import "./header.css";
function Header() {
  const navLink = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "none",
      color: isActive ? "black" : "black"
    };
  };
  return (
    <div className="header">
      <NavLink style={navLink} to="/">
        <h1 className="btn__Header">
          Moview
          <TheaterComedyIcon />
        </h1>
      </NavLink>
      <NavLink to="/review">
        <button className="btnSign">Add</button>
      </NavLink>
    </div>
  );
}

export default Header;
