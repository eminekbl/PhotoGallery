import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./Signup.css";

function Login({ history }) {
  const authContextAPI = React.useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/");
    }
  }, [history]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );
      localStorage.setItem("token", data.token);
      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
      console.log(error);
    }
  };

  return (
    <div className="submit-screen">
      <Form className="submit-form" onSubmit={handleLogin}>
        <h3 className="text-center submit-title">Login</h3>
        {error && <span className="error-message">{error}</span>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="password-label">
            Password{" "}
            <Link to="/forgotpassword" className="forgotpassword">
              Forgot Password?
            </Link>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="submit-button" variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <span>
          Dont have an account? <Link to="/signup">Signup</Link>
        </span>
      </Form>
    </div>
  );
}

export default Login;
