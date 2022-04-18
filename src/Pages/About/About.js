import React from "react";
import picture from "../../images/experts/filename.jpg";
const About = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row px-5">
          <div className="col-md-6 col-sm-1 col-md-2">
            <img src={picture} alt="" />
          </div>
          <div className="col-md-6 col-sm-1 col-md-2">
            <h1 className="fw-bold">About me..</h1>
            <p>
              Hi, This is <span className="fw-bold">Jubair Ahmed Junjun.</span>{" "}
              I want to be a Full Stack WebDeveloper. I always Try to Think
              logically, computationally, and creatively to solve problems.
              Identify and analyze a problem, design a solution algorithm as a
              systematic way of processing the necessary information to produce
              the required output, and implement the solution as a computer
              program.
              <br />
              My self-motivated attitude and smart working ability can be an
              add-on for achieve this goal Insa-Allah.
            </p>
            <button type="button" className="btn btn-secondary">
              Explore me more..<i className="fas fa-arrow-right p-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
