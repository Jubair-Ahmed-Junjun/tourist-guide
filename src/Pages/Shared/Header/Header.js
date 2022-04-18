import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={30} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#service">Services</Nav.Link>
              <Nav.Link href="home#expert">Team</Nav.Link>
              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>

              {user ? (
                <button onClick={handleSignOut}>Sign Out</button>
              ) : (
                <Nav.Link as={Link} eventKey={2} to="login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
