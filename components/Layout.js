import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  contentWrapper: {
    //    overflow: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'center',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  toolbar: theme.mixins.toolbar,
  footer: {
    flexShrink: 0,
    overflowY: 'auto',
  },
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

        <Footer className={classes.footer} />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Layout;
