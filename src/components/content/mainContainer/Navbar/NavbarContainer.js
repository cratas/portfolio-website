import React, { useState } from "react";

import {
  Navbar,
  Button,
  Container,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";

import classes from "./NavbarContainer.module.css";

import mainLogo from "../../../../assets/main-logo.png";
import hoverLogo from "../../../../assets/empty-logo.png";

const NavbarContainer = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  // const links = {'home', 'about', 'work', 'contact'};

  const changeToggleStatus = () => {
    setIsToggleActive((status) => !status);
  };

  const mouserEnterLogo = () => {
    setIsLogoHovered(true);
  };

  const mouseLeaveLogo = () => {
    setIsLogoHovered(false);
  };

  const setFocus = () => {};

  const navbarToggleClassesFirst = isToggleActive
    ? `${classes.toggleIconLine} ${classes.rotateLeft}`
    : classes.toggleIconLine;

  const navbarToggleClassesSecond = isToggleActive
    ? `${classes.toggleIconLine} ${classes.rotateRight}`
    : classes.toggleIconLine;

  return (
    <Navbar sticky="top" expand="lg" className={classes.navbarContainer}>
      <Container fluid>
        <Navbar.Brand href="#">
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
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <Nav.Link className={classes.links + " " + classes.active} href="#">
              Home
            </Nav.Link>
            <Nav.Link
              className={classes.links}
              href="#pecko"
              onClick={setFocus}
            >
              About
            </Nav.Link>
            <Nav.Link className={classes.links} href="#action2">
              Work
            </Nav.Link>
            <Nav.Link className={classes.links} href="#">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex flex-row-reverse bd-highlight">
            <Button className={classes.navbarButton} variant="outline-success" >
              Resume
            </Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarContainer;
