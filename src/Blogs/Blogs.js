import React from "react";
import { Card } from "react-bootstrap";
import "./Blogs.css";
import blog1 from "../images/blog/blog-1.png";
import blog2 from "../images/blog/blog-2.png";
import blog3 from "../images/blog/blog-3.jpeg";
const Blogs = () => {
  return (
    <div className="container mt-5">
      <>
        <Card>
          <Card.Img
            style={{ height: "420px", weight: "180px" }}
            variant="top"
            src={blog1}
          />
          <Card.Body>
            <Card.Text>
              <h1>Difference between authorization and authentication?</h1>
              <h3>The Core Difference Explained</h3>
              When you’re at the airport, there are two things you must have
              regardless of where you’re going – your passport and boarding
              pass. When you go through security, you provide your passport.
              This passport identifies who you are, and it is considered a
              trusted document. The picture inside further shows that you are
              who you say you are by allowing security to see if you match your
              photo. Your passport is a form of{" "}
              <span className="text-info">authentication</span> – you have
              attested that you are a particular person, and you have provided
              evidence that this is true. <br />
              When you get to your gate, however, a passport isn’t worth much.
              To actually board the plane, you need to present a boarding pass.
              This boarding pass was created as a token of trust between the
              airline and you – it conveys your ability to be on a flight. In
              that way, a boarding pass is a form of{" "}
              <span className="text-info">authorization</span>, showing that you
              are allowed to do what you say you’re allowed to do.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card.Img mt-3 variant="top" src={blog3} />
        <Card.Body>
          <Card.Text>
            <h1>
              What other services does firebase provide other than
              authentication?
            </h1>
            <h4>
              There are many services which Firebase provides, Most useful of
              them are:
            </h4>
            <ul>
              <li>Cloud Firestore.</li>
              <li>Cloud Functions.</li>
              <li> Authentication.</li>
              <li> liHosting. </li>
              <li> Cloud Storage. </li>
              <li> Google Analytics. </li>
              <li> Predictions. </li>
              <li> Cloud Messaging. </li>
            </ul>
          </Card.Text>
        </Card.Body>

        <Card>
          <Card.Body>
            <Card.Text>
              <h1>
                {" "}
                Why are you using firebase? What other options do you have to
                implement authentication?
              </h1>
              The Firebase Realtime Database lets you build rich, collaborative
              applications by allowing secure access to the database directly
              from client-side code. Data is persisted locally, and even while
              offline, realtime events continue to fire, giving the end user a
              responsive experience.
              <br />
              <br />
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through cards,
              retina scans, voice recognition, and fingerprints.
            </Card.Text>
          </Card.Body>
          <Card.Img
            style={{ height: "420px", weight: "180px" }}
            variant="bottom"
            src={blog2}
          />
        </Card>
      </>
    </div>
  );
};

export default Blogs;
