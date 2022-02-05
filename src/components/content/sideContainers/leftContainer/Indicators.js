import React from 'react';

import classes from './Indicators.module.css'

function Indicators() {
  return <div className={classes.indicatorsWrapper}>
      <div className={classes.indicator}></div>
      <div className={classes.indicator}></div>
      <div className={classes.indicator}></div>
      <div className={classes.indicator}></div>
  </div>;
}

export default Indicators;
