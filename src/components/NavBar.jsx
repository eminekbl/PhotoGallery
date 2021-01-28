import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { MdLooks } from "react-icons/md";

function NavBar(props) {
  let history = useHistory();
  const [value, setValue] = React.useState("");
  const linkItems = props.links
    .filter((item) => item.islink)
    .map((item, index) => (
      <Nav.Link as={Link} to={item.link} key={index}>
        {item.title}
      </Nav.Link>
    ));

  function handleSubmit(event) {
    console.log(`/search/${value}`);
    setValue(value.toLowerCase());
    history.push(`/search/${value}`);
  }

  return (
    <div>
      <Navbar className="navbar" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <MdLooks size="2em" />
          {` PhotoGallery`}
        </Navbar.Brand>
        <Nav className="mr-auto">{linkItems}</Nav>
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            className="mr-sm-2"
            // type="search"
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
      </Navbar>
    </div>
  );
}

export default NavBar;
