/* eslint-disable no-unused-vars */
import React from "react";
import ContactImage from "../Images/ContactImage.png";

const Contact_Form = () => {
  return (
    <>
      <div className="container">
        <div className="container_contact">
          <div className="left">
            <img
              className="contact_image"
              style={{
                width: "30rem",
                paddingTop: "6rem",
                position: "relative",
                top: "-30px",
              }}
              src={ContactImage}
            />
          </div>
          <form action="https://formspree.io/f/mnqengpe" method="POST">
            <div
              style={{ position: "relative", top: "-30px" }}
              className="right"
            >
              <div>
                <div className="row">
                  <h1 style={{color:"transparent"}}>contact us</h1>
                </div>
                <div className="row input-container">
                  <div className="col-xs-12">
                    <span
                      style={{
                        fontFamily: "poppins",
                        color: "#004171",
                        fontSize: "2rem",
                        fontWeight: "bold",
                      }}
                    ></span>
                    <div className="styled-input wide">
                      <input className="input_contact" type="text" required name="name" />
                      <label>Name</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="styled-input">
                      <input className="input_contact" type="text" required name="email"/>
                      <label>Email</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="styled-input" style={{ float: "right" }}>
                      <input className="input_contact" type="text" required name="number"/>
                      <label>Phone Number</label>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="styled-input wide">
                      <textarea defaultValue={""} name="message" />
                      <label>Message</label>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <button type="submit" className="contact_button">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact_Form;
