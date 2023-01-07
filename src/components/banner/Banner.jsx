import React, { useEffect } from "react";
import "./Banner.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Banner() {
  //AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="banner col" data-aos="fade-up">
      <h2>Create Your Own NFT!</h2>
      <p>
        We have a large scale group to support each other in this game, Join us
        to get the news as soon as possible and follow our latest announcements!
      </p>
      <button>Join Community Now</button>
    </div>
  );
}

export default Banner;
