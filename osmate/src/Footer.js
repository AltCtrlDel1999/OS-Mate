import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  const currentYear = new Date().getFullYear();

  return(
    <footer>
      <Container>
        <Row>
          <Col>© {currentYear} OS-Mate</Col>
          <Col>Get all Open Source Events and Hackathons under one roof</Col>
          <Col><a href="https://github.com/AltCtrlDel1999/OS-Mate"><GitHubIcon style={{fill: "black"}}/></a></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;