import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { IconContext } from "react-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../images/image.jpg";
import { FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";
function Contact(props) {
    return (
        <Container>
            <IconContext.Provider value={{ color: "black"}}>
            <Row className="justify-content-center text-center mt-3">
                <Col sm={6}>
                    <h1>CONTACT ME</h1>
                    <Image id='ppImg' src={image} thumbnail />
                    <h4>Emine Kebeli</h4>
                    <Row className="justify-content-center text-center mt-3">
                    <Col xs={1} >
                            <a id='mediaIcon' href="https://tr.linkedin.com/in/eminekebeli">
                                <FiLinkedin size="2em" />
                            </a>
                        </Col>
                        <Col xs={1} className='mx-5'>
                            <a  id='mediaIcon' href="https://www.instagram.com/kbl.emine/">
                                <FiInstagram size="2em" />
                            </a>
                        </Col>
                        <Col  xs={1}>
                            <a id='mediaIcon' href="https://www.facebook.com/emine.kebeli/">
                                <FiFacebook size="2em" />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </IconContext.Provider>
        </Container>
    );
}

export default Contact;
