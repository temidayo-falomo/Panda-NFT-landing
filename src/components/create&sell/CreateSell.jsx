import React from "react";
import "./CreateSell.css";
import { createSellData } from "./CreateSellData";

function CreateSell() {
  return (
    <div className="create-sell col">
      <h2>Create And Sell Your NFTs</h2>
      <div className="create-container">
        {createSellData.map((data, index) => {
          return (
            <div className="create-box col" key={index}>
              <img src={data.icon} alt="" />
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
