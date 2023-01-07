import React, { useEffect } from "react";
import "./LiveAuctions.css";
import Card from "../card/Card";
import { nftsData } from "../../NftsData";
import Aos from "aos";
import "aos/dist/aos.css";

function LiveAuctions() {
  //AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="live-auctions col">
      <div className="top-row row" data-aos="fade-up">
        <h3>Live Auctions</h3>
        <button className="get-started-btn">Get Started</button>
      </div>

      <div className="auction-cards">
        {nftsData.slice(0, 4).map((data, index) => {
          return (
            <div key={index} data-aos="fade-up">
              <Card {...data} />
            </div>
          );
        })}
      </div>
      <img src="./assets/blur.svg" alt="" className="blur-2" />
    </div>
  );
}

export default LiveAuctions;
