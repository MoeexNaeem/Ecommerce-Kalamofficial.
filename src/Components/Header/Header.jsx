/* eslint-disable no-unused-vars */
import React from "react";
import "../Header/Header.css";
import HeaderImage from "../Header/HeaderImage.png";
import Navbar from "../Navabar/Navbar";
import { NavLink } from "react-router-dom";
import Featured_Prodcuts from "./Featured_Prodcuts/Featured_Prodcuts";
import About_page from "../About/About_page";
import Contact_Form from "../Contact/Contact_Form";
import banner from "../Images/banner.png";
import "animate.css";

const Header = () => {
  return (
    <>
      <Navbar />

      <div className="custom-banner">
        <div className="row">
          <div className="col-12">
            <img
              src={banner}
              className="img-fluid"
              alt="Responsive Banner Image"
            />
            <div className="banner-text">
              <div style={{ marginLeft: "20rem", marginTop: "2.5rem" }}>
                <h2
                  style={{
                    color: "white",
                    fontFamily: "poppins",
                    letterSpacing: "1.3px",
                    lineHeight: "55px",
                  }}
                >
                  <span style={{ fontSize: "15px", color: "#d1d3d4" }}>
                    Make it Simple but Significant
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      fontSize: "50px",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                    }}
                  >
                    <span className="header_heading">
                      Explore Amazing <br />
                      Fashionable Wearables <br />
                      this Season
                    </span>
                  </span>
                </h2>
                <NavLink to="/men">
                <button className="btn_header">
                  <span >Shop Now</span>
                </button>
                </NavLink>
                <NavLink to="/contact">
                <button style={{backgroundColor:"#FD346A"}} className="btn_header">
                  <span>Contact Us</span>
                </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="left-column">
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
      </div> */}

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
        <Contact_Form />
      </div>
    </>
  );
};

export default Header;
