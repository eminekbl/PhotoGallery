import React from 'react'
import {Container,Row,Col} from "react-bootstrap"

function About(props) {
    return (
        <Container className='mt-4'>
            <Row className="justify-content-center">
                <Col sm={5} id='block'>
                <h1>ABOUT THIS PROJECT</h1>
                <p>You can find the photos you are interested in by searching keywords. You can find the photographer's name, biography if available, and a photo description. You can also check out the photographer's Unsplash portfolio.
This website uses unsplash-api, be sure to change API Key before cloning.</p>
                <a id="license" href="https://unsplash.com/license">
                Read More About Unsplash License </a>
                </Col>
            </Row>
            
        </Container>
    )
}

export default About


