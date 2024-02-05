/* eslint-disable no-unused-vars */
import React from "react";
import "../Orders_Complete/Order.css";
import { NavLink } from "react-router-dom";

const Order = () => {
  return (
    <>
      <div className="cards">
       <NavLink to="/cart">
       <button type="button" className="dismiss">
          <span style={{ paddingBottom: "6px" }}>x</span>
        </button>
       </NavLink>
        <div className="header">
          <div className="image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g strokeWidth={0} id="SVGRepo_bgCarrier" />
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                id="SVGRepo_tracerCarrier"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="#000000"
                  d="M20 7L9.00004 18L3.99994 13"
                />{" "}
              </g>
            </svg>
          </div>
          <div className="content">
            <span className="title">Order validated</span>
            <p className="message">
              Thank you for your purchase. you package will be delivered within
              2 days of your purchase
            </p>
          </div>
          <div className="actions">
            <NavLink to="/men">
              <button type="button" className="history">
                Go Back
              </button>
            </NavLink>
            <NavLink to="/track">
            <button type="button" className="track">
              Track my package
            </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
