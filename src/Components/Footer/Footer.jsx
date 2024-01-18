/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import "../Footer/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div style={{width:"100%", maxHeight:"2rem"}}>
    <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft'}}>
                  <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                  <p>Don’t miss any updates of our new templates and extensions.!</p>
                  <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate="true" _lpchecked={1}>
                    <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                    <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                    <p className="mchimp-errmessage" style={{display: 'none'}} />
                    <p className="mchimp-sucmessage" style={{display: 'none'}} />
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft'}}>
                  <h3 className="f-title f_600 t_color f_size_18">More</h3>
                  <ul className="list-unstyled f_list">
                    <li><a  style={{textDecoration:"none"}} href="#">My account</a></li>
                    <li><a  style={{textDecoration:"none"}} href="#">Orders</a></li>
                    <li><a  style={{textDecoration:"none"}} href="#">Downloads</a></li>
                    <li><a  style={{textDecoration:"none"}} href="#">Desktop</a></li>
                    <li><a  style={{textDecoration:"none"}} href="https://dev-1o5gaz5twofg6tjb.us.auth0.com/login?state=hKFo2SBGeEkwdHhmT3pCREZpUWM0Y3VSU3Q1MlJUd0ZkWF9xc6FupWxvZ2luo3RpZNkgdjdQQTlmZ2RibjVvUkx5TXQzRkFzNkJSYmlVN1p1VGajY2lk2SB4TTZDVnlKeURjazVmQjRheUo0TmlSbFNCVmtiZURVQQ&client=xM6CVyJyDck5fB4ayJ4NiRlSBVkbeDUA&protocol=oauth2&scope=openid%20profile%20email&redirect_uri=http%3A%2F%2Flocalhost%3A5173&response_type=code&response_mode=query&nonce=V1FERHo1bTBVRnluVm9ONTdsWXdlbExsS0VkbC1DUkdHTmozWGpFTHUxQw%3D%3D&code_challenge=0l2hvNaJe5QHHW1g4MaoX1NDQ6XnH3AXXFKkF8cenGM&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMi4yLjQifQ%3D%3D">Log out</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft'}}>
                  <h3 className="f-title f_600 t_color f_size_18">Support</h3>
                  <ul className="list-unstyled f_list">
                    <li><a  style={{textDecoration:"none"}} href="#">Track Order</a></li>
                    <li><a  style={{textDecoration:"none"}} href="#">Wishlist</a></li>
                    <li><a  style={{textDecoration:"none"}} href="#">Shop</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft'}}>
                  <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                  <div className="f_social_icon">
                    <NavLink to="#" className="fab fa-facebook"><FacebookIcon style={{marginBottom:"6px"}}/></NavLink>
                    <NavLink to="#" className="fab fa-facebook"><InstagramIcon style={{marginBottom:"6px"}}/></NavLink>
                    <NavLink to="#" className="fab fa-facebook"><XIcon style={{marginBottom:"6px"}}/></NavLink>
                    <NavLink to="#" className="fab fa-facebook"><PinterestIcon style={{marginBottom:"6px"}}/></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one" />
            <div className="footer_bg_two" />
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">© cakecounter Inc.. 2019 All rights reserved.</p>
              </div>
              <div className="col-lg-6 col-sm-5 text-right">
                <p>Made by <i className="icon_heart" /><a href="https://kalamofficial.com/" rel='noreferrer' target="_blank">kalamofficial</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Footer
