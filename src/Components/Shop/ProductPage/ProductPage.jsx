/* eslint-disable no-unused-vars */
import React from "react";
import "../ProductPage/ProductPage.css";
import Navbar from "../../Navabar/Navbar";
import { NavLink, useLocation } from "react-router-dom";
import Stars from "../Social/Stars";

const ProductPage = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const image = searchParams.get("image");
  const offprice = searchParams.get("offprice");
  const item = searchParams.get("item");

  return (
    <>
      <Navbar />
      <div className="category_style_ProductPage">Category</div>
      <div>
        <NavLink to="/men">
          <button id="bottone5">Men</button>
        </NavLink>
        <NavLink>
          <button id="bottone5">Women</button>
        </NavLink>
      </div>
      <Stars/>
      <div className="cards">
        <nav>
          <NavLink to="/men">
            <svg
              className="arrow"
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
            >
              <polygon
                points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "
                stroke="#727272"
              />
            </svg>{" "}
          </NavLink>
          Back to Product Page
          <svg
            className="heart"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
          >
            <path
              d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"
              stroke="#727272"
            />
          </svg>
        </nav>
        <div className="photo">
          <img src={image} />
        </div>
        <div className="description">
          <h2>{title}</h2>
          <h4>By KalamOfficial.</h4>
          <h1>{offprice}</h1>
          <p>{description}</p>
          <NavLink to="/cart">
            <button>View Cart</button>
            </NavLink>
          <NavLink to="/men">
            <button>Shop Now</button>
          </NavLink>
        </div>
      </div>
      <div className="product_page_description">
        <span>Description</span>
        <br />
        <div className="product_page_description container">{description}</div>
      </div>
    </>
  );
};

export default ProductPage;
