import React from "react";
import { Col, Row, Container, Button, Card } from "react-bootstrap";
import {  BrowserRouter as Router,useHistory,} from "react-router-dom";
import "./PhotoCard.css";

function PhotoCard(props) {
  let history = useHistory();


  function handleClick(event) {
    history.push(`/search/detail/${event}`);
  }
  return (
    <Router>
      <Container>
        <Row>
          {props.images.map((image, index) => {
            return (
              <Col id='cardColumns' md={6} className="mt-3">
                <Card id="card">
                  <Card.Img
                    key={index}
                    id="cardImg"
                    src={`https://source.unsplash.com/${image.id}/600x500`}
                    alt=""
                  />
                  <Card.Body>
                    <div className="overlay"></div>
                    <Button
                      className="text-center"
                      id="button"
                      key={index}
                      onClick={() => {
                        handleClick(image.id);
                      }}
                    >
                      See More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Router>
  );
}

export default PhotoCard;
