/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../Shop/Men.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const Cards = (props) => {

  const navigate = useNavigate();
  const {addItem} = useCart();

  const handleButtonClick = () => {
    navigate(
      `/productpage?id=${props.id}&title=${props.title}&description=${props.description}&image=${props.image}&offprice=${props.offprice}&offprice=${props.offprice}`
    );
  };

  return (
    <>
      <div
        style={{ marginTop: "30px", marginBottom: "20px", textAlign: "center" }}
      >
        <div className="div_style">
          <img
            onClick={handleButtonClick}
            className="img_style"
            src={props.image}
          />
          <div style={{ marginTop: "10px" }}>
            <span className="title_style">{props.title}</span>
            <br />
          </div>
          <div className="stars">
            {/* Display the star rating based on the 'stars' prop */}
            {Array.from({ length: props.stars }, (_, index) => (
              <span key={index} role="img" aria-label="star">
                ⭐
              </span>
            ))}
          </div>
          <span
            style={{
              textDecoration: "line-through",
            }}
          >
            <span style={{ fontWeight: "500" }}>Rs</span>
            {props.price}
          </span>
          <span>
            <span style={{ fontWeight: "500" }}>Rs</span>
            {props.offprice}
          </span>
          <br />
          <div>
            <button onClick={() => addItem(props.item)} className="btn_cart_style">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
