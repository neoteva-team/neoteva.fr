/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider, withStyles } from '@material-ui/styles';
import App from 'next/app';
// import { Head } from 'next/document';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import { initGA } from '../src/helpers/googleAnalytics';
import theme from '../src/theme';

const GlobalCss = withStyles({
  '@global': {
    'html, body ,body > div:first-child, div#__next, div#__next > div': {
      height: '100%',
    },
  },
})(() => null);

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
    initGA(this.props.router.pathname);

    return (
      <div>
        <Head>
          <link rel="canonical" href="https://www.neoteva.fr/" />

          <title>neoteva, direction générale de transition</title>

          <meta
            name="description"
            content="Une réponse à vos besoins de gouvernance d'entreprise et d'assistance à maîtrise d'ouvrage"
          />
          <meta
            name="keywords"
            content="mangement de transition directeur général directeur de projet paris bordeaux toulouse bayonne biarritz olivier lorendeaux sud ouest"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and 
          simple baseline to build upon. */}
          {/* <CssBaseline /> */}
          <GlobalCss />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </div>
    );
  }
}
