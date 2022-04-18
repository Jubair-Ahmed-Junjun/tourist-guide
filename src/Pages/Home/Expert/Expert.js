import React from "react";

const Expert = ({ expert }) => {
  const { name, img, designation } = expert;
  return (
    <div id="expert" className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card " style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>{designation}</h6>
          <p className="card-text">
            Travel information to inspire global travellers. From cities to
            airports, cruise ports to ski and beach resorts, attractions to
            events, our guides provide ..
          </p>
          <a href="#" className="btn btn-secondary">
            Explore More..
          </a>
        </div>
      </div>
    </div>
  );
};

export default Expert;
