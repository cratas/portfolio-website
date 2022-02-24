import React from "react";
import Icon from "../../UI/Icon";

import classes from "./ContentContainers.module.css";

const FooterContainer = () => {

  return (
    <footer>

      <div className={classes.iconsContainer}>
        <Icon iconType="GIT" style={{marginRight: '1rem'}} />
        <Icon iconType="LINKEDIN" />
      </div>
      <div className={classes.footerText}>
        Designed & implemented by Petr Kratochvíl
      </div>
    </footer>
  );
}

export default FooterContainer;
