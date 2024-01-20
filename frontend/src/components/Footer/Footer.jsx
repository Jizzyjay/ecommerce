import React from "react";
import "./Footer.css";
import Footer_Logo from "../assets/logo_big.png";
import instagram from "../assets/instagram_icon.png";
import pintrest from "../assets/pintester_icon.png";
import whatsapp from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Footer_Logo} alt="Logo" />
        <p>SHOPNOW</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social">
        <div className="footer-icons-container">
          <img src={whatsapp} alt="Whatsapp" />
          </div>
          <div className="footer-icons-container">
          <img src={instagram} alt="Instagram" />
          </div>
          <div className="footer-icons-container">
          <img src={pintrest} alt="Pintrest" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
