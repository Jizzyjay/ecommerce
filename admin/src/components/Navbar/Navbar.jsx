// import React from 'react'
import "./Navbar.css";
import Logo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="nav-logo" />
      <img src={navProfile} alt="Nav-profile" className="nav-profile" />
    </div>
  );
};

export default Navbar;
