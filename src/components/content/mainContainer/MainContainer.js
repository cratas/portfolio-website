import { useState } from "react";
import { useDispatch } from "react-redux";
import ReactScrollDetect, { DetectSection } from "react-scroll-detect";

import { Container } from "react-bootstrap";

import NavbarContainer from "./../navbar/NavbarContainer.js";
import AboutContainer from "./contentContainers/AboutContainer";
import ContactContainer from "./contentContainers/ContactContainer";
import HomeContainer from "./contentContainers/HomeContainer";
import WorkContainer from "./contentContainers/WorkContainer";
import FooterContainer from "./contentContainers/FooterContainer";

import { navActions } from "../../../store/nav";

import classes from "./MainContainer.module.css";

const MainContainer = () => {
  const dispatch = useDispatch();
  const [cur, setSection] = useState(0);

  // eslint-disable-next-line default-case
  switch (cur) {
    case 0:
      dispatch(navActions.linkHome());
      break;
    case 1:
      dispatch(navActions.linkAbout());
      break;
    case 2:
      dispatch(navActions.linkWork());
      break;
    case 3:
      dispatch(navActions.linkContact());
      break;      
  }

  return (
    <div className={classes.contentWrapper}>
      <Container id="home">
        <NavbarContainer />
        
        <ReactScrollDetect triggerPoint="center" onChange={setSection}>
          <DetectSection>
            <HomeContainer />
          </DetectSection>

          <DetectSection>
            <AboutContainer />
          </DetectSection>

          <DetectSection>
            <WorkContainer />
          </DetectSection>

          <DetectSection>
            <ContactContainer />
          </DetectSection>
        </ReactScrollDetect>

        <FooterContainer />
      </Container>
    </div>
  );
};

export default MainContainer;
