/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Navabar/Navbar";
import "../Contact/Contact.css";

import Contact_Form from "./Contact_Form";

const Contact = () => {
  return (
    <>
      <Navbar />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6954.112493936786!2d71.69644374124535!3d29.368642251105943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b911ac1ad0a49%3A0x5d9d1c86af2b8032!2sMustafa%20Town%2C%20Bahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1705279086925!5m2!1sen!2s"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div
        style={{
          fontFamily: "poppins",
          fontSize: "30px",
          color: "#004171",
          position: "absolute",
          marginLeft: "40rem",
          marginTop: "1rem",
        }}
      >
        Contact Us
      </div>
      <Contact_Form />
    </>
  );
};

export default Contact;
