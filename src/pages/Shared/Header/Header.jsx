import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";


const Header = () => {
  const {user} = useContext(AuthContext)

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      className="mb-3 py-3"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none">
            {" "}
            NEWS- <span className="fw-bold text-primary">PORTAL</span>{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none">NEWS</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none">Category</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none">About Us</Link>{" "}
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
