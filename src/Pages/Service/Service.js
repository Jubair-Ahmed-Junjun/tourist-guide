import React from "react";
import "./Service.css";
import { useNavigate } from "react-router-dom";
const Service = ({ service }) => {
  const { id, name, description, price, img } = service;
  const navigate = useNavigate();
  const navigateToHandleDetails = (id) => {
    navigate(`service/${id}`);
  };
  return (
    <div id="service" className="service">
      <img src={img} className="img-fluid w-100" alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => navigateToHandleDetails(id)}
        className="btn btn-secondary"
      >
        Book {name}
      </button>
    </div>
  );
};

export default Service;
