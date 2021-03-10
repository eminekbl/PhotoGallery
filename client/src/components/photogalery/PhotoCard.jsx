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
     { props.images.length > 0 ?  
      <Container>
        <Row>
          {props.images.map((image, index) => {
            return (
              <Col key={index} id='cardColumns' md={6} className="mt-3">
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
      :
              <Container className='mt-4'>
              <Row className="justify-content-center">
                  <Col sm={5} id='block'>
                  <h4>Sorry, no images matching your search were found.</h4>
                  </Col>
              </Row>
              
          </Container>
      }
    </Router>
  );
}

export default PhotoCard;
