import { makeStyles } from '@material-ui/core';
import React from 'react';
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
  //    const { container } = props;
  const { children } = props;

  const classes = useStyles();
  //  const { Component } = props.props;
  //  const { pageProps } = props.props;
  //  const { Component, pageProps } = props;

  console.log('LAYOUT', props);

  return (
    <div className={classes.root}>
      <Header />
      <SideBar />
      <div className={classes.contentWrapper}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
