/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Navabar/Navbar";
import { useLocation } from "react-router-dom";
import Order from "../Orders_Complete/Order";
import { useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

const Address = () => {
  
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    address: "",
    email: "",
    phone: "",
    information: "",
  });
  const { fname, lname, email, address, phone, information } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      setIsLoading(true);

      const response = await axios.post(
        "https://64773bd19233e82dd53b3989.mockapi.io/kalamofficial",
        {
          fname,
          lname,
          address,
          email,
          phone,
          information,
          newPrice,
          title,
        }
      );
      console.log("Data sent:", response.data);
      setPurchaseClicked(true);
    } catch (error) {
      console.error("Error sending data:", error);
    }
    finally {
      setIsLoading(false);
    }
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const cartTotal = parseFloat(searchParams.get("cartTotal"));
  const title = searchParams.get("title");
  const quantity = searchParams.get("quantity");
  const newPrice = parseFloat(searchParams.get("newPrice"));
  const total = cartTotal + 220;

  const [isPurchaseClicked, setPurchaseClicked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div style={{paddingBottom:"30rem"}}>
          <Loader/>
        </div>
      ) : isPurchaseClicked ? (
        <div style={{ marginTop: "16rem", marginRight: "40%" }}>
          <Order />
        </div>
      ) : (
        <div className="container" style={{ width: "60rem" }}>
          <div className="row">
            <div className="col-md-8 mb-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Biling details</h5>
                </div>
                <div className="card-body">
                  <form>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form7Example1"
                            className="form-control"
                            name="fname"
                            value={fname}
                            onChange={handleChange}
                          />
                          <label
                            style={{ fontFamily: "poppins", fontSize: "small" }}
                            className="form-label"
                            htmlFor="form7Example1"
                          >
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form7Example2"
                            className="form-control"
                            name="lname"
                            value={lname}
                            onChange={handleChange}
                          />
                          <label
                            style={{ fontFamily: "poppins", fontSize: "small" }}
                            className="form-label"
                            htmlFor="form7Example2"
                          >
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Text input */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form7Example3"
                        className="form-control"
                      />
                      <label
                        style={{ fontFamily: "poppins", fontSize: "small" }}
                        className="form-label"
                        htmlFor="form7Example3"
                      >
                        Company name
                      </label>
                    </div>
                    {/* Text input */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form7Example4"
                        className="form-control"
                        name="address"
                        value={address}
                        onChange={handleChange}
                      />
                      <label
                        style={{ fontFamily: "poppins", fontSize: "small" }}
                        className="form-label"
                        htmlFor="form7Example4"
                      >
                        Address
                      </label>
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form7Example5"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                      <label
                        style={{ fontFamily: "poppins", fontSize: "small" }}
                        className="form-label"
                        htmlFor="form7Example5"
                      >
                        Email
                      </label>
                    </div>
                    {/* Number input */}
                    <div className="form-outline mb-4">
                      <input
                        type="number"
                        id="form7Example6"
                        className="form-control"
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                      />
                      <label
                        style={{ fontFamily: "poppins", fontSize: "small" }}
                        className="form-label"
                        htmlFor="form7Example6"
                      >
                        Phone
                      </label>
                    </div>
                    {/* Message input */}
                    <div className="form-outline mb-4">
                      <textarea
                        className="form-control"
                        id="form7Example7"
                        rows={4}
                        defaultValue={""}
                        name="information"
                        value={information}
                        onChange={handleChange}
                      />
                      <label
                        style={{ fontFamily: "poppins", fontSize: "small" }}
                        className="form-label"
                        htmlFor="form7Example7"
                      >
                        Additional information
                      </label>
                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-2">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue
                        id="form7Example8"
                        defaultChecked
                      />
                      <label
                        style={{ fontFamily: "poppins", fontSize: "small" }}
                        className="form-check-label"
                        htmlFor="form7Example8"
                      >
                        Create an account?
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5
                    style={{ fontFamily: "poppins", fontSize: "small" }}
                    className="mb-0"
                  >
                    Summary
                  </h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li
                      style={{ fontFamily: "poppins", fontSize: "small" }}
                      className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                    >
                      Products
                      <span >{newPrice}</span>
                    </li>
                    <li
                      style={{ fontFamily: "poppins", fontSize: "small" }}
                      className="list-group-item d-flex justify-content-between align-items-center px-0"
                    >
                      Shipping
                      <span>
                        <span style={{ marginRight: "0.5rem" }}>{title}</span>x
                        {quantity}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong
                          style={{ fontFamily: "poppins", fontSize: "small" }}
                        >
                          Total amount
                        </strong>
                        <strong>
                          <p
                            style={{ fontFamily: "poppins", fontSize: "small" }}
                            className="mb-0"
                          >
                            (including VAT)
                          </p>
                        </strong>
                      </div>
                      <span>
                        <strong
                          style={{ fontFamily: "poppins", fontSize: "small" }}
                        >
                          {newPrice + 220}
                        </strong>
                      </span>
                    </li>
                  </ul>
                  <button
                    onClick={handleSubmit}
                    style={{
                      fontFamily: "poppins",
                      fontSize: "small",
                      backgroundColor: "#004171",
                    }}
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Make purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Address;
