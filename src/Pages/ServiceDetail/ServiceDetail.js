import React from "react";
import { Link, useParams } from "react-router-dom";
import checkout from "../../images/checkout.jpg";
const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div className="container">
      <div className="text-center mt-5">
        <Link to="/checkout">
          {" "}
          <button className="btn btn-secondary fw-bold btn-lg form-control">
            Please Checkout
          </button>
        </Link>
      </div>
      <div className="mt-3">
        <img className="img-fluid" src={checkout} alt="" />
      </div>
    </div>
  );
};

export default ServiceDetail;
