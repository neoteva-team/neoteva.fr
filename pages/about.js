// implements about page
import { makeStyles } from '@material-ui/styles';
// import { Head } from 'next/document';
import Head from 'next/head';
import React from 'react';
import DemoCoverflow from '../components/CoverFlow';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    //    width: 'auto',
  },
  content: {
    overflow: 'auto',
    flexGrow: 1,
  },
  swipable: {
    minHeight: '200px',
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
        <DemoCoverflow />
      </div>
    </div>
  );
};

export default About;
