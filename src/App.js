import React from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import CreateSell from "./components/create&sell/CreateSell";
import FeaturedArtistes from "./components/featured-artistes/FeaturedArtistes";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import HotNfts from "./components/hot-nfts/HotNfts";
import LiveAuctions from "./components/live-auctions/LiveAuctions";
import Logos from "./components/logos/Logos";
import Navbar from "./components/navbar/Navbar";
import Slideshow from "./components/slideshow/Slideshow";

//chaged this line

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Slideshow />
      <Logos />
      <CreateSell />
      <LiveAuctions />
      <FeaturedArtistes />
      <HotNfts />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
