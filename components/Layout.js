import { CssBaseline, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    //    flexDirection: 'row'
    //    flexWrap: 'wrap'
  },
  contentWrapper: {},
}));

const Layout = props => {
  const { children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <SideBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div className={classes.contentWrapper}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Layout;
