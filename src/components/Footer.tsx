import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import info from "../../package.json";

const Footer = () => (
  <footer className="footer">
    <Container fluid>
      <Row className="text-muted">
        <Col xs="6" className="text-start">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                href={process.env.REACT_APP_WEBSITE_EXTERNAL}
                target="_blank"
                rel="noreferrer"
                className="text-muted"
              >
                Sobre mim
              </a>
            </li>
          </ul>
        </Col>
        <Col xs="6" className="text-end">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} -{" "}
            <span className="text-muted">
              {process.env.REACT_APP_WEBSITE_NAME}
            </span>
            <span className="text-muted">
              {process.env.REACT_APP_WEBSITE_TEXT + " - v" + info.version}
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
