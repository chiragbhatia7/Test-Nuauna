 /* eslint-disable */
import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer-section">
      <div className="footer-top">
        <ul className="footer-links">
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms And Conditions</a>
          </li>
        </ul>
        <ul className="footer-contact">
          <li>
            <a href="#">
              <i className="fa-solid fa-phone"></i> +91 93131 80572
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-location-pin"></i> 111, Nuauna Studio,
              Parle Point Apartment, Shastri Road, Bardoli, Surat
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-clock"></i> Monday to Saturday : 10 : 00
              am - 5 : 30 pm. Sunday : Closed
            </a>
          </li>
        </ul>
        <div className="footer-socials">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">Nuauna @ {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
