import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav, Form } from "react-bootstrap";

import { navActions } from "../../../../store/nav";

import classes from "./NavbarContainer.module.css";

import mainLogo from "../../../../assets/main-logo.png";
import hoverLogo from "../../../../assets/empty-logo.png";
import MyButton from "../../UI/MyButton";

const NavbarContainer = (props) => {
  const dispatch = useDispatch();
  const linksState = useSelector((state) => state.nav);

  const [isToggleActive, setIsToggleActive] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const changeToggleStatus = () => {
    setIsToggleActive((status) => !status);
  };

  const mouserEnterLogo = () => {
    setIsLogoHovered(true);
  };

  const mouseLeaveLogo = () => {
    setIsLogoHovered(false);
  };

  const linkHomeHandler = () => {
    dispatch(navActions.linkHome());
  };

  const linkAboutHandler = () => {
    dispatch(navActions.linkAbout());
  };

  const linkWorkHandler = () => {
    dispatch(navActions.linkWork());
  };

  const linkContactHandler = () => {
    dispatch(navActions.linkContact());
  };

  const homeNavLinkClasses = linksState.home
    ? `${classes.links} ${classes.active}`
    : classes.links;

  const aboutNavLinkClasses = linksState.about
    ? `${classes.links} ${classes.active}`
    : classes.links;

  const workNavLinkClasses = linksState.work
    ? `${classes.links} ${classes.active}`
    : classes.links;

  const contactNavLinkClasses = linksState.contact
    ? `${classes.links} ${classes.active}`
    : classes.links;

  const navbarToggleClassesFirst = isToggleActive
    ? `${classes.toggleIconLine} ${classes.rotateLeft}`
    : classes.toggleIconLine;

  const navbarToggleClassesSecond = isToggleActive
    ? `${classes.toggleIconLine} ${classes.rotateRight}`
    : classes.toggleIconLine;

  return (
    <Navbar sticky="top" expand="lg" className={`${classes.navbarContainer}`}>
      <Container className={classes.navbarWrapper}>
        <Navbar.Brand href="#home">
          <div className={classes.imageContainer}>
            <img
              src={!isLogoHovered ? mainLogo : hoverLogo}
              alt="main-logo"
              onMouseEnter={mouserEnterLogo}
              onMouseLeave={mouseLeaveLogo}
            ></img>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          className={classes.navbarToggle}
          aria-controls="navbarNavAltMarkup"
          onClick={changeToggleStatus}
        >
          <div className={classes.toggleIcon}>
            <div className={navbarToggleClassesFirst}></div>
            <div className={navbarToggleClassesSecond}></div>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link
              className={homeNavLinkClasses}
              href="#home"
              onClick={linkHomeHandler}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={aboutNavLinkClasses}
              href="#about"
              onClick={linkAboutHandler}
            >
              About
            </Nav.Link>
            <Nav.Link
              className={workNavLinkClasses}
              href="#work"
              onClick={linkWorkHandler}
            >
              Work
            </Nav.Link>
            <Nav.Link
              className={contactNavLinkClasses}
              href="#contact"
              onClick={linkContactHandler}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex flex-row-reverse justify-content-center bd-highlight">
            <MyButton customStyle={classes.navbarButtonAnimartion} href="https://github.com/cratas/cratas/files/8629683/Kratochvil-Petr-CV.pdf">
              Resume
            </MyButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarContainer;
