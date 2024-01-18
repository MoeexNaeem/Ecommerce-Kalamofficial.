/* eslint-disable no-unused-vars */
import React from "react";
import "../Featured_Prodcuts/Featured_Prodcuts.css";
import Featured_Cards from "./Featured_Cards/Featured_Cards";
import { NavLink } from "react-router-dom";
import "animate.css";

const Featured_Prodcuts = () => {
  return (
    <>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h6 className="featured_product_Top">TOP SALE ON THIS WEEK</h6>
          <span className="featured_product_Heading">Featured Products</span>
        </div>
        <div style={{textAlign:"center"}}>
        <Featured_Cards />
        </div>
        <div style={{ textAlign: "center", marginTop: "2.3rem", marginBottom:"2rem" }}>
          <NavLink to="/men">
          <button id="bottone1">
            <strong>SHOP NOW</strong>
          </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Featured_Prodcuts;
