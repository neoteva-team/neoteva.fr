// implements Layout footer

import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3),
    textAlign: 'center',
    flexShrink: 0,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      Copyright 2019 -{' '}
      <a href="https://www.linkedin.com/company/neoteva/">neoteva</a> - Created
      by{' '}
      <a href="https://www.linkedin.com/in/lorendeaux/">Olivier Lorendeaux</a>
    </footer>
  );
};

export default Footer;
