import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import "./header.css";
import axios from "axios";

function Header() {
  // const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "http://localhost:3000/auth/login/success"
      );
      console.log("Authenticated data ", request);
      return request;
    }
    fetchData();
  }, []);

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
      <NavLink to="/login">
        <button className="btnSign">Login</button>
      </NavLink>
    </div>
  );
}

export default Header;
