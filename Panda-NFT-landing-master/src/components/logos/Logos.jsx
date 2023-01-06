import React from "react";
import { LogosData } from "./LogosData";
import "./Logos.css";

function Logos() {
  return (
    <div className="logos row">
      {LogosData.map((data, index) => {
        return <img src={data.img} alt="" key={index} />;
      })}
      <img src="./assets/blur.svg" alt="" className="blur"/>
    </div>
  );
}

export default Logos;
