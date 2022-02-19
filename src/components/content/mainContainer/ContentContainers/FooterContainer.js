import React from 'react'

import classes from './ContentContainers.module.css';

function FooterContainer() {
  return (
    <footer>
        <p>Designed & implemented by <span className={classes.hoverName}>Petr Kratochvíl</span></p>
    </footer>
  );
};

export default FooterContainer;