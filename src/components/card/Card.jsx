import React from "react";
import { WiFire } from "react-icons/wi";
import "./Card.css";

function Card(props) {
  return (
    <div className="card col">
      <div className="top-img">
        <img src={props.image} alt="" />
      </div>

      <div className="row">
        <h5 style={{ fontSize: "1rem" }}>
          {props.name} {props.number}
        </h5>
        <span style={{ fontSize: ".8rem", color: "#adb9c7" }}>
          Current Bid
        </span>
      </div>

      <div className="row">
        <div className="rw hold">
          <img src={props.avatar} alt="" className="avatar" />
          <p>@{props.username}</p>
        </div>
        <h5>{props.price} eTH</h5>
      </div>

      <div className="row" style={{ marginTop: "1rem" }}>
        <div className="rw hold">
          <WiFire style={{ fontSize: "1.5rem", color: "#FF6D00" }} />
          <h5>{props.time}</h5>
        </div>

        <button className="bid-btn">Bid</button>
      </div>
    </div>
  );
}

export default Card;
