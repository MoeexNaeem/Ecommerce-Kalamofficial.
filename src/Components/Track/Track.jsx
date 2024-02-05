/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Navabar/Navbar";
import cartEmpty from "../Images/emptyCart.png";
import "../Track/Track.css"
import { NavLink } from "react-router-dom";
import trackImage from "../Images/trackImage.png"

const Track = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1
          style={{ fontFamily: "poppins", marginTop: "4rem" }}
          className=" text-center"
        >
          {" "}
          <NavLink to="https://www.leopardscourier.com/leopards-tracking">
          <button className="button">
            <span className="button_lg">
              <span className="button_sl"></span>
              <span className="button_text">Track Your Order</span>
            </span>
          </button>
          </NavLink>
        </h1>{" "}
        <img style={{ display: "block", margin: "auto" }} src={trackImage} />
      </div>
    </>
  );
};

export default Track;
