 /* eslint-disable */
 import React, { useState, Fragment } from "react";
import "./Contact.css";


const Contact = () => {
  return (
    <Fragment>
     
    <div className="contactContainer">
      {/* <ul className="content">
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
          </ul> */}
      <p><b>Contact number </b></p>
      <p> +91 93131 80572 </p>
      <p><b>Address </b></p>
      <p>  111, Nuauna Studio,Parle Point Apartment, Shastri Road, Bardoli, Surat </p>
      <p><b>Timings</b></p>
      <p> Monday to Saturday : 10 : 00
              am - 5 : 30 pm.</p> <p>Sunday : Closed </p>
    </div>
    
    </Fragment>
  );
};

export default Contact;
