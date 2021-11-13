import React from 'react';
import { Card, CardGroup} from 'react-bootstrap';

const Bike = ({bike}) => {
    const {Details, img} = bike;
    return (
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{Details}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 12 November</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{Details}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 12 November</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{Details}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 12 November</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    );
};

export default Bike;

