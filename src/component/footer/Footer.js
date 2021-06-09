import React from 'react'
import {Row,Col} from 'react-bootstrap'
import './footer.css'


const Footer = () => {
    return (
      <div className="footer mt-5">
        <Row className="footer_section">
          <Col md={6} lg={3}>
            <ul className="footer__list">
              <li>Programs</li>
              <li>Certificate</li>
              <li>Claims</li>
              <li>Users</li>
              <li>Payments</li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <ul className="footer__list">
              <li>Terms of Use</li>
              <li>Legal Notice</li>
              <li>Privacy</li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <ul className="footer__list">
              <li>Contact Us</li>
            </ul>
          </Col>
        </Row>
        <Row className="footer__copyrightText">
            <Col>
                <p>&#169;American Internation Group, All Rights Reserved.</p>
            </Col>
        </Row>
      </div>
    );
}

export default Footer
