import React from "react";
import { Container, Row } from "react-bootstrap";
import Icon from './Icon';
import "./NavItem.scss";
import "./CallNow.scss";

const CallNow = () => {
  return (
    <Container>
      <Row
        className="nav-link text-center"
        smooth="easeInOutQuart"
      >
        <a  href= "tel:9734458993" className="text-center text-uppercase"><Icon className="phoneIcon" iconName="PhoneIcon" size="lg" color= 'rgba(255, 255, 255, 0.5)'/>  Call Now!  </a>
      </Row>
    </Container>
  );
};


export default CallNow;
