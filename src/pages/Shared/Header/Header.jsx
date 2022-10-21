import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

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
          <Nav className="d-flex align-items-center">
            <Nav.Link>
              {user?.uid ? (
                <>
                  <span className="fw-semibold">
                    User Name: {user?.displayName}
                  </span>
                  <Button
                    onClick={handleLogOut}
                    className="mx-2"
                    variant="outline-secondary"
                  >
                    Log Out
                  </Button>{" "}
                </>
              ) : (
                <>
                  <Link className="text-decoration-none mx-1" to="/login">
                    Login
                  </Link>
                  <Link className="text-decoration-none mx-1" to="/register">
                    Register
                  </Link>
                </>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2}>
              {user?.photoURL ? (
                <Image
                  roundedCircle
                  style={{ width: "40px" }}
                  src={user?.photoURL}
                  alt="img-loading.."
                />
              ) : (
                <FaUser></FaUser>
              )}
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
