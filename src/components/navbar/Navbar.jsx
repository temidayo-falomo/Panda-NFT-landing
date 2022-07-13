import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <nav className="row">
      <div className="logo" onClick={() => setClick(!click)}>
        {click ? (
          <RiCloseFill className="hamburger" />
        ) : (
          <GiHamburgerMenu className="hamburger" />
        )}
        <img src="./assets/logo.svg" alt="" />
      </div>
      <ul className={click ? "nav-links row active-nav" : "nav-links row"}>
        <li>Home</li>
        <li>Discover</li>
        <li>Docs</li>
        <li>Blog</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <button>Connect Wallet</button>
    </nav>
  );
}

export default Navbar;
