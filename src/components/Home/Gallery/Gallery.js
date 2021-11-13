import React from 'react';
import { Button, Card, CardGroup, Row} from 'react-bootstrap';

const Gallery = () => {
    return (
          <div>
              <Button variant="warning"><h2>Gallery</h2></Button>
              <CardGroup>
              <Row xs={1} md={2} lg={3} className="g-4">
        <Card>
          <Card.Img variant="top" src="http://localhost:3000/static/media/bike-9.346dff09.jpg" />
          <Card.Body>
            <Card.Title>Yamaha-Bike</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="http://localhost:3000/static/media/bike-3.32795176.png" />
          <Card.Body>
            <Card.Title>Yamaha-Bike</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://cdn.wallpapersafari.com/25/2/ij5Z2s.jpg" />
          <Card.Body>
            <Card.Title>Yamaha-Bike</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/Le5KD62BID3bPFbuuEjY0HipfVOb8WxnRm-SypZu0JAg_bOQZQJ6YUwLumWwbMKj31QUMvICXK8hiufsruycgTTVb3sqmNhvZRpaP6d7hqf-wcvz=w1200-h630-p-k-no-nu" />
          <Card.Body>
            <Card.Title>Yamaha-Bike</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.teahub.io/photos/full/16-160362_10-yamaha-r1-hd-wallpapers-yamaha-r1-wallpaper.jpg" />
          <Card.Body>
            <Card.Title>Yamaha-Bike</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/b2/e3/cd/b2e3cdd26ba5993c5c8b04427beb1d02.jpg" />
          <Card.Body>
            <Card.Title>Yamaha-Bike</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="http://www.wallpaperhi.com/thumbnails/detail/20111202/yamaha-r1.jpg" />
          <Card.Body>
            <Card.Title>Yamaha-Bike</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="http://p2m.mbike.com/000/003/372/10926355.jpg" />
          <Card.Body>
            <Card.Title>Yamaha-Bike</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.teahub.io/photos/full/16-160362_10-yamaha-r1-hd-wallpapers-yamaha-r1-wallpaper.jpg" />
          <Card.Body>
            <Card.Title>Yamaha-Bike</Card.Title>
          </Card.Body>
        </Card>
        </Row>
      </CardGroup>
          </div>
      
    );
};

export default Gallery;