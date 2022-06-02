import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../assets/SpotifyCategory.css';

const SpotifyCategory = ({ imgUrl, categoryName }) => {
    return (
            <Card className="card-container">
                <Card.Img className="image-container" variant="top" src={imgUrl} />
                <Card.Body className="card-content">
                    <Card.Title className="card-title">{categoryName}</Card.Title>
                    <Card.Text className="card-text">
                        All you need to know about the music you like.
                    </Card.Text>
                    <Button className="btn" variant="primary">{categoryName}</Button>
                </Card.Body>
            </Card>
    )
}

export default SpotifyCategory;