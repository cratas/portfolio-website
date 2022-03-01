import React from "react";
import Icon from "../../UI/Icon";

import commonClasses from "./CommonContentContainer.module.css";

const FooterContainer = () => {

  return (
    <footer>
      <div className={commonClasses.iconsContainer}>
        <Icon iconType="GIT" style={{marginRight: '1rem'}} />
        <Icon iconType="LINKEDIN" />
      </div>
      <div className={commonClasses.footerText}>
        Designed & implemented by Petr Kratochvíl
      </div>
    </footer>
  );
}

export default FooterContainer;
