import React from "react";
import "./LiveAuctions.css";
import Card from "../card/Card";
import { nftsData } from "../../NftsData";

function LiveAuctions() {
  return (
    <div className="live-auctions col">
      <div className="top-row row">
        <h3>Live Auctions</h3>
        <button className="get-started-btn">Get Started</button>
      </div>

      <div className="auction-cards">
        {nftsData.slice(0, 4).map((data, index) => {
          return <Card {...data} key={index} />;
        })}
      </div>
      <img src="./assets/blur.svg" alt="" className="blur-2"/>
    </div>
  );
}

export default LiveAuctions;
