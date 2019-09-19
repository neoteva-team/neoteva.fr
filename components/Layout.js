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
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header handleDrawerToggle={handleDrawerToggle} />
      <SideBar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
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
