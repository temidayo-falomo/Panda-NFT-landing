import React from "react";
import { useState } from "react";
import Card from "../card/Card";
import "./HotNfts.css";
import { nftsData } from "../../NftsData";
import { hotNftsData } from "./HotNftsData";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function HotNfts() {
  const [nfts, setNfts] = useState(nftsData);
  const [category, setCategory] = useState("All");
  const [number, setNumber] = useState(0);

  const filterItems = (param, num) => {
    if (param === category) {
      setNfts(nftsData);
      setNumber(0);
    } else {
      let newItems = nftsData.filter((item) => {
        return item.category === param;
      });
      setNfts(newItems);
      setNumber(num);
    }
  };

  useEffect(() => {
    filterItems(category);
  }, []);

  //AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="hot-nfts col">
      <div className="top-row row">
        <h3>Hot NFTs</h3>
        <div className="buttons row">
          {hotNftsData.map((btn, index) => {
            return (
              <button
                data-aos="fade-up"
                key={index}
                onClick={() => filterItems(btn.category, index)}
                className={`normal-btn ${index === number && "active-btn"}`}
              >
                {btn.category}
              </button>
            );
          })}
          <a href="/">
            <button>More</button>
          </a>
        </div>
      </div>

      <div className="hot-nfts-container row">
        {nfts.length !== 0 ? (
          nfts
            .slice(0)
            .reverse()
            .map((data, index) => {
              return (
                <div data-aos="fade-up" key={index}>
                  <Card {...data} />
                </div>
              );
            })
        ) : (
          <h3 style={{ margin: "auto", color: "orange" }}>
            No Trending NFTs...
          </h3>
        )}
      </div>
    </div>
  );
}

export default HotNfts;
