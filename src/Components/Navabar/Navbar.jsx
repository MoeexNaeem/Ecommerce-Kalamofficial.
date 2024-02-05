/* eslint-disable no-unused-vars */
import React from "react";
import "../Navabar/Navbar.css";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAuth0 } from "@auth0/auth0-react";
import Kalam from "../Images/Kalam.png"

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ background: "white" }}
        >
          <div
            className="container-fluid"
            style={{ alignItems: "center", alignContent: "center" }}
          >
            <NavLink className="navbar-brand" href="#">
             <img  style={{width:"6rem"}} src={Kalam}/>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav mx-auto mb-2 mb-lg-0"
                style={{ paddingLeft: "10rem", paddingRight: "3rem" }}
              >
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <div>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/men">
                    Shop
                  </NavLink>
                </li>
                </div>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/track">
                    Track
                  </NavLink>
                </li>
                <NavLink to="/contact" className="nav-link">
                  <li className="nav-item">Contact</li>
                </NavLink>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <NavLink to="/cart" style={{ color: "transparent" }}>
            <div>
              <ShoppingCartOutlinedIcon
                className="Icon_style"
                style={{
                  float: "right",
                  marginRight: "10px",
                  color: "#004171",
                  alignContent: "center",
                  alignItems: "center",
                }}
              />
            </div>
          </NavLink>

          {/* <Person2OutlinedIcon
                className="Icon_style"
                style={{
                  float: "right",
                  marginRight: "2rem",
                  color: "#004171",
                  alignContent: "center",
                  alignItems: "center",
                  fontSize:"x-large"
                }}
              /> */}
          

          {isAuthenticated ? (
            <button
              className="Auth_button"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button className="Auth_button" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          )}
        </nav>
        <div className="auth_user_name">
            {isAuthenticated && <span>{user.name}</span>}
          </div>
      </div>
    </>
  );
};

export default Navbar;
