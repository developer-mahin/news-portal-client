import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../../context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [isDisable, setIsDisable] = useState(true);
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.displayName);
  const photoURLRef = useRef(user.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          readOnly
          defaultValue={user?.email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your name</Form.Label>
        <Form.Control
          onBlur={handleNameChange}
          defaultValue={user?.displayName}
          name="name"
          type="text"
          placeholder="Your name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control
          ref={photoURLRef}
          defaultValue={user?.photoURL}
          name="photoURL"
          type="text"
          placeholder="photoURL"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={() => setIsDisable(!isDisable)}
          type="checkbox"
          label="Check me out"
        />
      </Form.Group>
      <Button disabled={isDisable} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
