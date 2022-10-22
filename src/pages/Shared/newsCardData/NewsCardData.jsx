import React from "react";
import { Button, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCardData = ({ category }) => {
  const { author, title, details, image_url, total_view, rating, _id } =
    category;
  return (
    <div>
      <Card className="mb-3">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center gap-3">
            <div>
              <Image
                className=""
                roundedCircle
                style={{ width: "50px" }}
                src={author?.img}
              />
            </div>

            <div>
              <h6>{author?.name}</h6>
              <p className="mb-0">{author?.published_date}</p>
            </div>
          </div>

          <div>
            <FaBookmark className="me-2"></FaBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <span>
                {details.slice(0, 250) + "..."}{" "}
                <Link to={`/news/${_id}`}>Reade More</Link>
              </span>
            ) : (
              <span>{details}</span>
            )}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center gap-2">
            <FaStar className="text-warning"></FaStar>
            <p className="mb-0">{rating?.number}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <FaEye></FaEye>
            <p className="mb-0">{total_view}</p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCardData;
