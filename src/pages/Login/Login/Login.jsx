import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Login = () => {
  const { loginWithEmailPassword, setUser } = useContext(AuthContext);
  const [isDisable, setIsDisable] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        form.reset();
        setError("")
        navigate(from, {replace: true})
      })
      .catch((error) => {
        console.error(error);
        setError(error.message)
      });
  };

  return (
    <Form
      onSubmit={handleLogin}
      className="w-75 mx-auto bg-secondary bg-opacity-25 p-3 rounded "
    >
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
        Login
      </Button>
      <p>Are you new? <Link to='/register'>Register</Link> </p>
    </Form>
  );
};

export default Login;
