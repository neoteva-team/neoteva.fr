// implements Layout footer

import { makeStyles } from '@material-ui/core';
import NextLink from 'next/link';
import React from 'react';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3),
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      Copyright 2019 -{' '}
      <NextLink href="https://www.linkedin.com/company/neoteva/">
        <a>neoteva</a>
      </NextLink>{' '}
      - Created by{' '}
      <NextLink href="https://www.linkedin.com/in/lorendeaux/">
        <a>Olivier Lorendeaux</a>
      </NextLink>
    </footer>
  );
};

export default Footer;
