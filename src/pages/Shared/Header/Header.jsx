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
            <Nav.Item>
              {" "}
              <Link className="text-decoration-none mx-2">NEWS</Link>{" "}
            </Nav.Item>
            <Nav.Item>
              {" "}
              <Link className="text-decoration-none mx-2">Category</Link>{" "}
            </Nav.Item>
            <Nav.Item>
              {" "}
              <Link className="text-decoration-none mx-2">About Us</Link>{" "}
            </Nav.Item>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Item>
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
            </Nav.Item>
            <Link to="/profile">
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
            </Link>
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
