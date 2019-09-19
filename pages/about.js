// implements about page
import Head from 'next/head';
import React from 'react';
import DemoCoverflow from '../components/coverFlow';

const About = () => {
  return (
    <div>
      <Head>
        <title>neoteva, son dirigeant</title>
        <meta
          name="description"
          content="Parcours, expériences et compétences d'un chef et dirigeant d'entreprise : Olivier Lorendeaux "
        />
      </Head>
      <p>About</p>
      <DemoCoverflow />
    </div>
  );
};

export default About;
