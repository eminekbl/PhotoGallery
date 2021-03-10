import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./Signup.css";

function Login({ history }) {
  const authContextAPI = React.useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/");
    }
  }, [history]);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "https://ek-photogallery.herokuapp.com/api/auth/forgotpassword",
        { email },
        config
      );
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
      console.log(error);
    }
  };

  return (
    <div className="submit-screen">
      <Form className="submit-form" onSubmit={handleForgotPassword}>
        <h3 className="text-center submit-title">Forgot Password</h3>
        {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <Form.Group controlId="formBasicEmail">
          <p className="forgotpassword">
            Please enter the email address you register your account with. We
            will send you reset password confirmation to this email
          </p>
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button className="submit-button" variant="primary" type="submit">
          Send Email
        </Button>
      </Form>
    </div>
  );
}

export default Login;
