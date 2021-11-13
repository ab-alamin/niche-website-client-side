import React from 'react';
import Button from 'react-bootstrap/Button';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
           <>
  <Button variant="outline-primary">Terms of Use</Button>{' '}
  <Button variant="outline-secondary">System Requirements & Plug-Ins</Button>{' '}
  <Button variant="outline-success">Privacy Policy</Button>{' '}
  <br/>
  <br/>
  <Button variant="outline-warning">Cookie Policy</Button>{' '}
  <Button variant="outline-danger">Policy</Button>{' '}
  <Button variant="outline-info">Mail Us</Button>{' '}
  <Button variant="outline-light">Join Us</Button>{' '}
  <Button variant="outline-dark">Contact Us</Button>
</>
        </div>
    );
};

export default Footer;