import React from "react";
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
  FaTerminal
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical className="w-100">
        <Button variant="outline-primary mb-2">
          <FaGoogle></FaGoogle> Log in with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub></FaGithub> Log in with Github
        </Button>
      </ButtonGroup>
      <div className='mt-4'>
        <h6>Follow Us On</h6>
        <ListGroup>
            <ListGroupItem className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroupItem>
            <ListGroupItem className='mb-2'><FaYoutube></FaYoutube> YouTube</ListGroupItem>
            <ListGroupItem className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroupItem>
            <ListGroupItem className='mb-2'><FaWhatsapp></FaWhatsapp> What'sApp</ListGroupItem>
            <ListGroupItem className='mb-2'><FaDiscord></FaDiscord> Discord</ListGroupItem>
            <ListGroupItem className='mb-2'><FaTwitch></FaTwitch> Privacy Policy</ListGroupItem>
            <ListGroupItem className='mb-2'><FaTerminal></FaTerminal> Terms & Conditions</ListGroupItem>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
