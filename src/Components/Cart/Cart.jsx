/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Navabar/Navbar";
import { useCart } from "react-use-cart";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Cart/Cart.css";
import cartEmpty from "../Images/emptyCart.png";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [showItems, setShowItems] = useState([]);

  const navigate = useNavigate();

  const newPrice = items.reduce(
    (acc, item) => acc + item.offprice * item.quantity,
    0
  );

  const handleBuyNowClick = () => {
    if (items.length > 0) {
      const itemDetails = items.map((item) => ({
        title: item.title,
        offprice: item.offprice,
        quantity: item.quantity,
        totalPrice: item.offprice * item.quantity,
        cartTotal: item.cartTotal,
      }));
      setShowItems(itemDetails);
      navigate(
        `/address?title=${items[0].title}&offprice=${items[0].offprice}&cartTotal=${cartTotal}&cartTotal=${cartTotal}&quantity=${items[0].quantity}&newPrice=${newPrice}`
      );
    }
  };

  if (isEmpty)
    return (
      <>
        {" "}
        <Navbar />{" "}
        <h1
          style={{ fontFamily: "poppins", marginTop: "4rem" }}
          className=" text-center"
        >
          {" "}
          Your cart is Empty
        </h1>{" "}
        <img style={{ display: "block", margin: "auto" }} src={cartEmpty} />
      </>
    );

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left_cart_div">
          <section className="py-4 container">
            <div className="row justify-content-center">
              <div className="col-12">
                <h5 style={{ fontFamily: "poppins", fontSize: "medium" }}>
                  Cart:{" "}
                  <span style={{ fontWeight: "bold" }}>{totalUniqueItems}</span>{" "}
                  total Item:{" "}
                  <span style={{ fontWeight: "bold" }}>{totalItems}</span>
                </h5>
                <table className="table m-0">
                  <tbody>
                    {items.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img src={item.image} style={{ height: "6rem" }} />
                          </td>
                          <div style={{ marginTop: "1rem" }}>
                            <td className="cart_styles">{item.title}</td>
                          </div>
                          <td
                            style={{ paddingTop: "2.6rem" }}
                            className="cart_styles"
                          >
                            {item.offprice}
                          </td>
                          <div style={{ marginTop: "2rem" }}>
                            <td className="cart_styles">
                              Quantity {item.quantity}
                            </td>
                          </div>
                          <td>
                            <button
                              style={{ marginTop: "1.7rem", color: "#004171" }}
                              onClick={() => {
                                updateItemQuantity(item.id, item.quantity - 1);
                              }}
                              className="quantity_button"
                            >
                              -
                            </button>
                            <button
                              style={{ color: "#004171" }}
                              onClick={() => {
                                updateItemQuantity(item.id, item.quantity + 1);
                              }}
                              className="quantity_button"
                            >
                              +
                            </button>
                            <button
                              onClick={() => {
                                removeItem(item.id);
                              }}
                              className="remove_button"
                            >
                              Remove Items
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {/* <div className="col-auto ms-auto">
              <button
                onClick={() => {
                  emptyCart();
                }}
                className="btn btn-danger m-2"
              >
                Clear Cart
              </button>
              <button onClick={handleBuyNowClick} className="btn btn-info">
                Update Cart
              </button>
            </div> */}
            </div>
          </section>
        </div>

        <div className="right_cart_div">
          <div className="p-3 bg-light bg-opacity-10">
            <h6 className="card-title mb-3">Order Summary</h6>
            <div className="d-flex justify-content-between mb-1 small">
              <span>Subtotal</span> <span>{newPrice}</span>
            </div>
            <div className="d-flex justify-content-between mb-1 small">
              <span>Shipping</span> <span>220</span>
            </div>
            <div className="d-flex justify-content-between mb-1 small">
              <span>Coupon (Code: NEWYEAR)</span>{" "}
              <span className="text-danger">0.00</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-4 small">
              <span>TOTAL</span>{" "}
              <strong className="text-dark">{newPrice + 220}</strong>
            </div>
            <div className="form-check mb-1 small">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="tnc"
              />
              <label className="form-check-label" htmlFor="tnc">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
            <div className="form-check mb-3 small">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="subscribe"
                required
              />
              <label className="form-check-label" htmlFor="subscribe">
                Get emails about product updates and events. If you change your
                mind, you can unsubscribe at any time.{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>
          </div>
          <button onClick={handleBuyNowClick} className="cart_checkout_button">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="clearfix"></div>
      </div>
    </>
  );
};

export default Cart;
