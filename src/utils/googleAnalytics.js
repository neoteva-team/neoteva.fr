import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('UA-148332477-1');
};

export const logPageView = url => {
  console.log(url);
  ReactGA.set({ page: url });
  ReactGA.pageview(url);
};
