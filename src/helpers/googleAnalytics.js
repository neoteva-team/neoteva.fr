// start Google Analytics only in production mode

import { Router } from 'next/router';
import ReactGA from 'react-ga';

export const logPageView = url => {
  ReactGA.set({ page: url });
  ReactGA.pageview(url);
};

export const initGA = pathname => {
  if (
    typeof window !== 'undefined' &&
    !window.GA_INITIALIZED &&
    process.env.NODE_ENV === 'production'
  ) {
    ReactGA.initialize('UA-148332477-1');
    window.GA_INITIALIZED = true;
    // Router.events register events for page navigation after initialization
    Router.events.on('routeChangeComplete', url => logPageView(url));
    logPageView(pathname);
  }
};
