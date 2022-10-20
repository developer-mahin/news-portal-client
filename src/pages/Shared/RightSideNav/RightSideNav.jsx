import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaDiscord,
  FaTwitch,
  FaTerminal,
} from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  const { googleLogin, setUser, githubLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const gitHubSignIn = () => {
    githubLogin(gitHubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  

  return (
    <div>
      <ButtonGroup vertical className="w-100">
        <Button onClick={googleSignIn} variant="outline-primary mb-2">
          <FaGoogle></FaGoogle> Log in with Google
        </Button>
        <Button onClick={gitHubSignIn} variant="outline-secondary">
          <FaGithub></FaGithub> Log in with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h6>Follow Us On</h6>
        <ListGroup>
          <ListGroupItem className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaYoutube></FaYoutube> YouTube
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaWhatsapp></FaWhatsapp> What'sApp
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaDiscord></FaDiscord> Discord
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaTwitch></FaTwitch> Privacy Policy
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaTerminal></FaTerminal> Terms & Conditions
          </ListGroupItem>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
