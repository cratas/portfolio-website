import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav, Form } from "react-bootstrap";

import { navActions } from "../../../store/nav";

import classes from "./NavbarContainer.module.css";

import mainLogo from "../../../assets/main-logo.png";
import hoverLogo from "../../../assets/empty-logo.png";
import englishResume from "../../../assets/resumeEN.pdf";
import MyButton from "../UI/MyButton";
import { LINKS } from "../../../constants/navigation";

const NavbarContainer = () => {
  const dispatch = useDispatch();
  const linksState = useSelector((state) => state.nav.currentLocation);

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

  const homeNavLinkClasses =
    linksState === LINKS.home
      ? `${classes.links} ${classes.active}`
      : classes.links;

  const aboutNavLinkClasses =
    linksState === LINKS.about
      ? `${classes.links} ${classes.active}`
      : classes.links;

  const workNavLinkClasses =
    linksState === LINKS.work
      ? `${classes.links} ${classes.active}`
      : classes.links;

  const contactNavLinkClasses =
    linksState === LINKS.contact
      ? `${classes.links} ${classes.active}`
      : classes.links;

  const navbarToggleClassesFirst = isToggleActive
    ? `${classes.toggleIconLine} ${classes.rotateLeft}`
    : classes.toggleIconLine;

  const navbarToggleClassesSecond = isToggleActive
    ? `${classes.toggleIconLine} ${classes.rotateRight}`
    : classes.toggleIconLine;

  const openResumes = () => {
    window.open(englishResume);
  };

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
              onClick={() => dispatch(navActions.changeLocation(LINKS.home))}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={aboutNavLinkClasses}
              href="#about"
              onClick={() => dispatch(navActions.changeLocation(LINKS.about))}
            >
              About
            </Nav.Link>
            <Nav.Link
              className={workNavLinkClasses}
              href="#work"
              onClick={() => dispatch(navActions.changeLocation(LINKS.work))}
            >
              Work
            </Nav.Link>
            <Nav.Link
              className={contactNavLinkClasses}
              href="#contact"
              onClick={() => dispatch(navActions.changeLocation(LINKS.contact))}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex flex-row-reverse justify-content-center bd-highlight">
            <MyButton
              customStyle={classes.navbarButtonAnimartion}
              target="_blank"
              rel="noreferrer"
              onClick={openResumes}
            >
              Resume
            </MyButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarContainer;
