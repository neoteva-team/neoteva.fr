import { CssBaseline, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  contentWrapper: {
    width: '100%',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  toolbar: theme.mixins.toolbar,
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
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Layout;
