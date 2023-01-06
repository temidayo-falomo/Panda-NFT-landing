import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="col">
          <img src="./assets/logo.svg" alt="" className="footer-logo" />
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
        </div>

        <ul className="col">
          <h4>Resources</h4>
          <li>Platform Status</li>
          <li>Partners</li>
          <li>Gas-Free Marketplace</li>
          <li>Blog</li>
        </ul>

        <ul className="col">
          <h4>Company</h4>
          <li>Our Team</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Career</li>
        </ul>

        <ul className="col">
          <h4>Contact</h4>
          <li>2715 Ash Dr. San Jose,</li>
          <li>South Dakota 83475</li>
          <div className="row">
            <BsInstagram />
            <BsFacebook />
            <BsTwitter />
          </div>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
