import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap'

import './PhotoCard.css'
function PhotoGallery(props) {
  
  const categories = [
    {title:'nature', url:'https://source.unsplash.com/JgOeRuGD_Y4/706X270' }, 
    {title:'portrait', url:'https://source.unsplash.com/Ex1TxrV6NBA/706X270' }, 
    {title:'fashion', url:'https://source.unsplash.com/dlxLGIy-2VU/706X270' }, 
    {title:'sports', url:'https://source.unsplash.com/dVhM3o9BVeg/706X270' }, 
    {title:'animals', url:'https://source.unsplash.com/Hnq1Q3Dv2Ls/706X270' }, 
    {title:'Food & Drink', url:'https://source.unsplash.com/_79ZJS8pV70/706X270' }, 
    ]

  return (
    
      <Container className='mt-5'>
        <Row>
          {categories.map((item, index) => (
            <Col sm={6} key={index} className='mb-3'>
              <Card id="card" className="bg-dark text-white" as={Link} to={`/search/${item.title}`}>
                <Card.Img id="cardImg" src={item.url} alt="Card image" />
                <Card.ImgOverlay className="overlay">
                  <Card.Title id="title">{item.title.toUpperCase()}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}

        </Row>
        <a id='license' href="https://unsplash.com/license">Read More About Unsplash License</a>
      </Container>
      
      
    
  );
}

export default PhotoGallery
