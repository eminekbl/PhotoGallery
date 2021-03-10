import React, { useEffect } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { MdLooks } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../context/AuthContext";

function NavBar(props) {
  let history = useHistory();
  const authContextAPI = React.useContext(AuthContext);
  const [value, setValue] = React.useState("");
  // const [auth, setAuth] = React.useState(false);
  const linkItems = props.links
    .filter((item) => item.islink)
    .map((item, index) => (
      <Nav.Link as={Link} to={item.link} key={index}>
        {item.title}
      </Nav.Link>
    ));
  useEffect(() => {
    if (localStorage.getItem("token")) {
      authContextAPI.setAuth(true);
      console.log("auth");
    } else {
      authContextAPI.setAuth(false);
    }
  }, [authContextAPI, authContextAPI.auth]);
  function handleSubmit(event) {
    // console.log(`/search/${value}`);
    setValue(value.toLowerCase());
    history.push(`/search/${value}`);
  }
  function handleLogout() {
    localStorage.removeItem("token");
    authContextAPI.setAuth(false);
  }
  return (
    <div>
      <Navbar className="navbar" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <MdLooks size="2em" />
          {` PhotoGallery`}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {linkItems}
            {authContextAPI.auth ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>

          <Form inline onSubmit={handleSubmit}>
            <FormControl
              className="mr-sm-2"
              placeholder="Search Photos"
              aria-label="Search"
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
            <Button variant="outline-light" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
