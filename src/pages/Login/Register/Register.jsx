import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";



const Register = () => {
  const { createUser, updateUserProfile,verifyEmail } = useContext(AuthContext);
  const [isDisable, setIsDisable] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError("");
        navigate(from, { replace: true });
        // Profile updated!
        updateUserProfile({ displayName: name, photoURL: photoURL })
          .then(() => {
            setError("");
          })
          .catch((error) => {
            setError(error.message);
          });
          // email verify
          verifyEmail()
          .then(()=>{
            toast.success("Check and verify your email")
          })
          .catch((error)=>{
            setError(error.message)
          })
          
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };




  return (
    <Form
      onSubmit={handleOnSubmit}
      className="w-75 mx-auto bg-secondary bg-opacity-25 p-3 rounded "
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          name="photoURL"
          type="text"
          placeholder="Enter Photo url"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Enter Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={() => setIsDisable(!isDisable)}
          type="checkbox"
          label="Accept Terms and conditions"
        />
      </Form.Group>
      <Form.Text className="text-danger">{error}</Form.Text>
      <Button
        disabled={isDisable}
        className="w-100"
        variant="primary"
        type="submit"
      >
        Register
      </Button>
      <p>
        Already have an account? <Link to="/login">Login</Link>{" "}
      </p>
    </Form>
  );
};

export default Register;
