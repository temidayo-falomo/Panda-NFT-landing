import React, { useEffect } from "react";
import "./Hero.css";
import { BiLinkExternal } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {
  //AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="hero row" data-aos="fade">
      <div className="hero-left">
        <h1>Discover a New Era of Crypto Currency</h1>
      </div>

      <div className="hero-right col">
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ad, neque.
        </p>
        <div className="row center gap">
          <h4>Get Started</h4>
          <BiLinkExternal />
        </div>
      </div>
    </div>
  );
}

export default Hero;
