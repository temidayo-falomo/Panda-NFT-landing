import React from "react";
import Artist from "../artist/Artist";
import { artistesData } from "./ArtistesData";
import "./FeaturedArtistes.css";

function FeaturedArtistes() {
  return (
    <div className="featured-artist col">
      <div className="top-row row">
        <h3>Featured Artistes</h3>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="artistes-container">
      {artistesData.map((data, index) => {
        return <Artist key={index} {...data} />;
      })}
      </div>
    </div>
  );
}

export default FeaturedArtistes;
