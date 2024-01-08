import React, { useEffect } from "react";
import { LogosData } from "./LogosData";
import "./Logos.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Logos() {
  //UseEffect to load Aos
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="logos row">
      {LogosData.map((data, index) => {
        return <img src={data.img} alt="" key={index} data-aos="fade-up" />;
      })}
      <img src="./assets/blur.svg" alt="" className="blur" />
    </div>
  );
}

export default Logos;
