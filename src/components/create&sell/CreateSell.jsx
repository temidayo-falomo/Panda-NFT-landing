import React, { useEffect } from "react";
import "./CreateSell.css";
import { createSellData } from "./CreateSellData";
import Aos from "aos";
import "aos/dist/aos.css";

function CreateSell() {
  //AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="create-sell col">
      <h2 data-aos="fade-up">Create And Sell Your NFTs</h2>
      <div className="create-container">
        {createSellData.map((data, index) => {
          return (
            <div className="create-box col" key={index}>
              <img src={data.icon} alt="" data-aos="fade-up" />
              <h3>{data.header}</h3>
              <p>{data.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CreateSell;
