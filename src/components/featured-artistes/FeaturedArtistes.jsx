import React, { useEffect } from "react";
import Artist from "../artist/Artist";
import { artistesData } from "./ArtistesData";
import "./FeaturedArtistes.css";
import Aos from "aos";
import "aos/dist/aos.css";

function FeaturedArtistes() {
  //AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="featured-artist col">
      <div className="top-row row" data-aos="fade-up">
        <h3>Featured Artistes</h3>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="artistes-container">
        {artistesData.map((data, index) => {
          return (
            <div key={index} data-aos="fade-up">
              <Artist {...data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedArtistes;
