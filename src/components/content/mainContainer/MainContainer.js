import { useState } from "react";
import { useDispatch } from "react-redux";
import ReactScrollDetect, { DetectSection } from "react-scroll-detect";

import { Container } from "react-bootstrap";

import NavbarContainer from "../Navbar/NavbarContainer";
import AboutContainer from "./ContentContainers/AboutContainer";
import ContactContainer from "./ContentContainers/ContactContainer";
import HomeContainer from "./ContentContainers/HomeContainer";
import WorkContainer from "./ContentContainers/WorkContainer";
import FooterContainer from "./ContentContainers/FooterContainer";

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
      <Container className={classes.container} id="topOfPage">
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
