// implements about page
import { makeStyles } from '@material-ui/styles';
// import { Head } from 'next/document';
import Head from 'next/head';
import React from 'react';
import ScrollableTabsButtonAuto from '../components/CoverFlow/CoverFlowTab';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    //    width: 'auto',
  },
  content: {
    overflow: 'auto',
    flexGrow: 1,
  },
  swipable: {
    //    minHeight: '200px',
    flexShrink: 0,
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>neoteva, son dirigeant</title>
        <meta
          name="description"
          content="Parcours, expériences et compétences d'un chef et dirigeant d'entreprise : Olivier Lorendeaux "
        />
      </Head>
      <div className={classes.content} />
      <div className={classes.swipable}>
        <ScrollableTabsButtonAuto />
      </div>
    </div>
  );
};

export default About;
