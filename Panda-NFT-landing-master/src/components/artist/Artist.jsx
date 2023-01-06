import React from "react";
import { FaEthereum } from "react-icons/fa";
import "./Artist.css";

function Artist(props) {
  return (
    <div className="artist">
      <img src={props.avatar} alt="" className="profile" />
      <h4>{props.name}</h4>
      <span className="rw">
        <FaEthereum />
        {props.price}
      </span>
    </div>
  );
}

export default Artist;
