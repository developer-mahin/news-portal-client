import React from "react";
import Carousel from 'react-bootstrap/Carousel';


const BrandCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://www.feedough.com/wp-content/uploads/2016/09/brand-image.png'
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://www.emotivebrand.com/wp-content/uploads/2016/09/tumblr_o05v3eZmyT1ugn1wu_og_1280-1080x675.png'
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://assets.entrepreneur.com/content/3x2/2000/20170726052100-image11.jpeg'
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
