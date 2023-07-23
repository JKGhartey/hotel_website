import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

const Room = ({ room }) => {
  const { name, individualRoom, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0].fields.file.url || defaultImg} alt="single-room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${individualRoom}`} className="btn-primary room-link">
          Features
        </Link>
        <div>
          <p className="room-info">{name}</p>
        </div>
      </div>
    </article>
  );
};

export default Room;
