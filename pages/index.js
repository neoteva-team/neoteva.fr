/* eslint-disable no-unused-expressions */
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
// const sizeOf = require('image-size');
// console.log(sizeOf('logoAnimation'));
import ReactSVG from 'react-svg';
import mySvg from './neotevaTeaserAnimation.svg';

const drawerWidth = 240;
const headerHeight = 64;

function getWindowDimensions() {
  let width = 0;
  let height = 0;
  if (typeof window !== 'undefined') {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function Index() {
  //  const classes = useStyles();

  const { height, width } = useWindowDimensions();
  const ratio = (width - drawerWidth) / (height - headerHeight);

  return (
    <div>
      <ReactSVG
        src={mySvg}
        beforeInjection={svg => {
          if (ratio < 1) {
            svg.setAttribute('style', 'width: 100%');
          } else {
            svg.setAttribute('style', `height:${height - headerHeight}px`);
          }
          // Height is 190 here to account for `stroke-width: 5`.
          // svg.querySelector('rect').setAttribute('style', 'height: 190px');
        }}
      />

      <Typography paragraph align="left">
        En cours
      </Typography>
    </div>
  );
}

export default Index;
