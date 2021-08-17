import React from "react";
import { Link } from "react-router-dom";
import { RiAncientGateLine } from "react-icons/ri";
const Nav = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  const logoStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link className="logo" style={logoStyle} to="/">
          <RiAncientGateLine size={40} />
        </Link>
        <Link style={navStyle} to="/honshu">
          <li>HONSHU</li>
        </Link>
        <Link style={navStyle} to="/hokkaido">
          <li>HOKKAIDO</li>
        </Link>
        <Link style={navStyle} to="/kyushu">
          <li>KYUSHU</li>
        </Link>
        <Link style={navStyle} to="/okinawa">
          <li>OKINAWA</li>
        </Link>
        <Link style={navStyle} to="/shikoku">
          <li>SHIKOKU</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
