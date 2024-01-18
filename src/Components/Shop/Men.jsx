/* eslint-disable no-unused-vars */
// eslint-disable no-unused-vars
import React from "react";
import Navbar from "../Navabar/Navbar";
import "../Shop/Men.css";
import Cards from "./Cards";
import Data from "../Data/Data";
import { useState } from "react";
import Filter from "./Filter";
import Stars from "./Social/Stars";
import Cart from "../Cart/Cart";


const Men = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [value, setValue] = useState(4000);

  const handleSliderChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const filteredData = Data.filter(
    ({ title, offprice }) =>
      (searchTitle === "" ||
        title.toLowerCase().includes(searchTitle.toLowerCase())) &&
      offprice >= 0 &&
      offprice <= parseInt(value, 10)
  );
  return (
    <>
      <Navbar />
      <div className="parent">
        <div className="div1">
          <div className="filter_style">
            <div className="filter_style_title">Filter Products</div>
            <div className="group">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                className="input"
                type="text"
                placeholder="Search by title"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="filter_style_price_range">Filter by Price</div>
          <div>
            <div className="slider-container">
              <input
              style={{border:"none"}}
                type="range"
                min="0"
                max="4000"
                value={value}
                step="1"
                onChange={handleSliderChange}
              />
              <div className="slider-values">
                <span className="price_value">Rs.0</span>
                <span></span>
                <span className="price_value">Rs.{value}</span>
              </div>
            </div>
          </div>
          <Filter />
          <Stars/>
        </div>
        <div className="div2">
          <div>
            <div className="span_gaps">
              <span className="cards_heading">Showing all results</span>

              <div className="card-container">
                {filteredData.map((item, index) => (
                  <Cards
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    offprice={item.offprice}
                    stars={item.stars}
                    item={item}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Men;
