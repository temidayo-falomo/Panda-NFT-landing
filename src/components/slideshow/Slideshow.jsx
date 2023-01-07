import React, { useEffect } from "react";
import { slideImages } from "./SlideImages";
import "./Slideshow.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Slideshow() {
  //AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="slideshow">
      <div className="slide-track">
        {slideImages.map((val, index) => {
          return (
            <div className="slide" key={index} data-aos="fade">
              <img src={val.img} alt="" />
            </div>
          );
        })}
        <div className="slide">
          <img src="./assets/image-1.svg" alt="" />
        </div>
        <div className="slide">
          <img src="./assets/image-2.svg" alt="" />
        </div>
        <div className="slide">
          <img src="./assets/image-3.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
