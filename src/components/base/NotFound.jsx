import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
function NotFound(props) {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col sm={3}>
                <h1>404 NOT FOUND</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound
