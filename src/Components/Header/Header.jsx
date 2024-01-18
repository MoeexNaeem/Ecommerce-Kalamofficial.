/* eslint-disable no-unused-vars */
import React from "react";
import "../Header/Header.css";
import HeaderImage from "../Header/HeaderImage.png";
import Navbar from "../Navabar/Navbar";
import { NavLink } from "react-router-dom";
import Featured_Prodcuts from "./Featured_Prodcuts/Featured_Prodcuts";
import About_page from "../About/About_page";
import Contact_Form from "../Contact/Contact_Form";
import Patterns from "../Images/patterns.jpg"
import 'animate.css';

const Header = () => {
  return (
    <>
      <Navbar />
      
      <div className="left-column">
        <div className="animate__animated animate__fadeInLeft">
        <h2 className="Head_color">Make it Simple but</h2>
        <span className="Heading_color">significant</span>
        <h6 className="the_name">BY KALAMOFFICIAL.</h6>
        <br />
        <NavLink to="/men">
          <button className="cta">
            <span className="hover-underline-animation"> Shop now </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </NavLink>
        </div>
      </div>
      <div className="right-column">
        <img src={HeaderImage} alt="Independent Image" />
      </div>

      <div className="clearfix"></div>
      <hr className="hr_lines" />
      <div>
        <Featured_Prodcuts />
      </div>
      <hr className="hr_lines" />
      <div>
        <About_page />
      </div>
      <hr className="hr_lines" />
      <div>
      <div style={{ textAlign: "center" }}>
          <h6 className="featured_product_Top">Ask about our Product</h6>
          <span className="featured_product_Heading">Contact Us</span>
        </div>
        <Contact_Form/>
      </div>
    </>
  );
};

export default Header;
