import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  return (

    <div>
        <div className="desc-container">
      <p className="desc-text">
      
      </p>
    </div>
    <footer className="footer">


      

      <div className="footer-top">

        <div className="footer-col">
          <h4>ABOUT</h4>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
          <p>Press</p>
          <p>Corporate Information</p>
        </div>

        <div className="footer-col">
          <h4>GROUP COMPANIES</h4>
          <p>Myntra</p>
          <p>Cleartrip</p>
          <p>Shopsy</p>
        </div>

        <div className="footer-col">
          <h4>HELP</h4>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
        </div>

        <div className="footer-col">
          <h4>CONSUMER POLICY</h4>
          <p>Cancellation & Returns</p>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <p>Grievance Redressal</p>
          <p>EPR Compliance</p>
          <p>FSSAI Food Safety Connect</p>
        </div>

        <div className="footer-col address">
          <h4>Mail Us:</h4>
          <p>
            Flipkart Internet Private Limited,<br/>
            Buildings Alyssa, Begonia &<br/>
            Clove Embassy Tech Village,<br/>
            Outer Ring Road, Devarabeesanahalli Village,<br/>
            Bengaluru, 560103,<br/>
            Karnataka, India
          </p>

          <div className="social">
            <FaFacebookF/>
            <FaTwitter/>
            <FaYoutube/>
            <FaInstagram/>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Become a Seller</p>
        <p>Advertise</p>
        <p>Gift Cards</p>
        <p>Help Center</p>
        <p>© 2007-2026 Flipkart.com</p>
      </div>

    </footer>
    </div>
  );
}

export default Footer;