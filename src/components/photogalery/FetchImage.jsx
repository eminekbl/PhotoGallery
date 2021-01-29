import React, { useEffect } from "react";
import PhotoCard from "./PhotoCard";
import { Container } from "react-bootstrap";
import apiKey from "../../api/unsplashApiKey";
function FetchImage(props) {
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${apiKey}&page=1&query=${props.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.results);
        console.log(`images:: ${data.results}`);
        console.log(images);
      });
  }, []);
  return (
    <Container>{<PhotoCard images={images} /> }</Container>
  );
}

export default FetchImage;
