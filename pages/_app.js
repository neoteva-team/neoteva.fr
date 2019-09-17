import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
    <link rel="canonical" href="http://www.neoteva.fr/" />


          <title>neoteva, direction générale de transition</title>
          <meta name="description" content="Une réponse à vos besoins de gouvernance d'entreprise et d'assistance à maîtrise d'ouvrage"></meta>
          <meta name="keywords" content="mangement de transition directeur général directeur de projet paris bordeaux toulouse bayonne biarritz olivier lorendeaux sud ouest"></meta>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
