import React from "react";

import LeftContainer from "./sideContainers/leftContainer/LeftContainer";
import RightContainer from "./sideContainers/rightContainer/RightContainer";
import MainContainer from "./mainContainer/MainContainer";

function Content() {
  return (
    <>
      <LeftContainer />
      <MainContainer />
      <RightContainer />
    </>
  );
}

export default Content;
