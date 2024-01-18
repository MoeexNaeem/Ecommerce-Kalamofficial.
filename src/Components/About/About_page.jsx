/* eslint-disable no-unused-vars */
import React from 'react'
import AboutUs from "../Images/AboutUs.jpg"
import { NavLink } from 'react-router-dom'
import "../About/About.css"

const About_page = () => {
  return (
    <>
     <div className="container">
        <div style={{ textAlign: "center" }}>
          <h6 className="featured_product_Top">Want to Know more realted to us</h6>
          <span className="featured_product_Heading">About Us</span>
        </div>
        <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container bottomContainer">
          <div className="ultimateImg">
            <img className="mainImg" src={AboutUs} />
            <div className="purpleBox">
              <p style={{fontFamily:"poppins", fontSize:"medium"}} className="purpleText">
              Our vision is to be your go-to destination for all your shopping needs, providing a diverse range of products that cater to your lifestyle. We are committed to delivering top-notch customer service, ensuring satisfaction with every purchase.
              </p>
              <img className="stars" src="" />
            </div>
          </div>
          <div className="allText bottomText">
            <p className="text-blk headingText">
              About Me
            </p>
            <p style={{fontFamily:"poppins"}} className="text-blk subHeadingText">
            What Sets Us Apart
            </p>
            <p style={{fontFamily:"poppins", fontSize:"medium"}} className="text-blk description">
            We source products from reputable suppliers to guarantee the highest quality standards for our customers. Our website is designed with simplicity in mind, making your shopping journey seamless and enjoyable. Your privacy and security are our top priorities. We use advanced encryption to safeguard your personal information during transactions.
            </p>
            <NavLink style={{textDecoration:"none"}} to="/contact" className="explore">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default About_page