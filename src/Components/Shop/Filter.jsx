/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const Filter = () => {
  return (
    <>
      <div className="category_style">Category</div>
      <div>
        <NavLink to="/men">
          <button id="bottone5">Men</button>
        </NavLink>
        <NavLink>
          <button id="bottone5">Women</button>
        </NavLink>
      </div>
      <div>
        <div className="rating_style">Ratings</div>
        <div className="rating">
          <input value="5" name="rating" id="star5" type="radio" />
          <label htmlFor="star5"></label>
          <input value="4" name="rating" id="star4" type="radio" />
          <label htmlFor="star4"></label>
          <input value="3" name="rating" id="star3" type="radio" />
          <label htmlFor="star3"></label>
          <input value="2" name="rating" id="star2" type="radio" />
          <label htmlFor="star2"></label>
          <input value="1" name="rating" id="star1" type="radio" />
          <label htmlFor="star1"></label>
        </div>
      </div>
    </>
  );
};

export default Filter;
