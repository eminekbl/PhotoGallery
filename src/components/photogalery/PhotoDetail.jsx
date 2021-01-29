import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import apiKey from "../../api/unsplashApiKey";
import './PhotoCard.css'

function PhotoDetail(props) {
    const params = useParams();
    const { photoID } = params;
    const [details, setDetails] = React.useState({});

    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/${photoID}?client_id=${apiKey}`)
            .then((res) => res.json())
            .then((data) => {
                setDetails({
                    user: data.user.name,
                    id: data.id,
                    description: data.description,
                    url: `https://source.unsplash.com/${data.id}/900x800`,
                    portfolio_url: data.user.links.html,
                    bio: data.user.bio,
                    location: data.user.location,
                    full: data.urls.full
                });
            });
    }, []);

    return (
        <Container className="mt-3" >
            <Row>
                <Col sm={3} id='block'>
                    <p id="bold">Phorographer:</p>
                    <h4 id="bold">{details.user}</h4>
                    {details.location ? <h5>{`From: ${details.location}`}</h5> : ""}
                    <br />
                    {details.description ? (
                        <p id="description">{`Photo Description: 
                        ${details.description}`}</p>
                    ) : (
                            ""
                        )}
                    {details.bio ? <p id="details">{details.bio}</p> : ""}
                    <hr />
                    {details.portfolio_url ? (
                        <a href={details.portfolio_url}>
                            See Photographer Portfolio on Unsplash
                        </a>
                    ) : (
                            ""
                        )}
                </Col>
                <Col sm={9}>
                    <a href={details.full}>
                        <img
                            className="img-fill"
                            id="detailImg"
                            src={details.url}
                            alt=""
                        />
                    </a>

                </Col>
            </Row>
            <a id="license" href="https://unsplash.com/license">
                Read More About Unsplash License
      </a>
        </Container>
    );
}

export default PhotoDetail;
