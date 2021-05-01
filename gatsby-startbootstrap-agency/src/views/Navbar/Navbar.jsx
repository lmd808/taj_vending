import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Navbar, Container, Nav, Row } from "react-bootstrap";

import useWindowOnScroll from "hooks/useWindowOnScroll";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Icon from "components/Icon";
import NavItem from "components/NavItem";

import "./Navbar.scss";

const MyNavbar = ({ anchors, frontmatter, extraItems }) => {
  const { brand, menuText } = frontmatter;

  const handleScrollToTop = useSmoothScrollTo(0);

  const [expanded, setExpanded] = React.useState(false);
  const toggleMenu = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const closeMenu = React.useCallback(() => {
    setExpanded(false);
  }, []);
  const handleBrandClick = React.useCallback(() => {
    closeMenu();
    handleScrollToTop();
  }, [closeMenu, handleScrollToTop]);

  const [shrink, setShrink] = React.useState(false);
  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  return (
    <Navbar
      className={clsx("navbar-root", { "navbar-shrink": shrink })}
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="cursor-pointer" onClick={handleBrandClick}>
          {brand}
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation">
          {menuText}
          <Icon iconName="BarsIcon" />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="text-uppercase ml-auto">
            {anchors.map((anchor) => (
              <NavItem key={anchor} to={anchor} onClick={closeMenu} />
            ))}
          </Nav>
          {extraItems}
        </Navbar.Collapse>
        <br/>
            <Row
            className="nav-link text-center"
            smooth="easeInOutQuart"
          >
            <a  href= "tel:6092408310" className="text-center text-uppercase" id='phone-call-icon'><Icon className="phoneIcon" iconName="PhoneIcon" size="lg" color= 'rgba(255, 255, 255, 0.5)'/>  Call Now!  </a>
          </Row>
      </Container>
    </Navbar>
  );
};

MyNavbar.propTypes = {
  anchors: PropTypes.arrayOf(PropTypes.string),
  frontmatter: PropTypes.object,
  extraItems: PropTypes.any,
};

MyNavbar.defaultProps = {
  anchors: [],
  frontmatter: {},
  extraItems: null,
};

export default MyNavbar;
