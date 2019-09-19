import Animated from 'animated/lib/targets/react-dom';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';

// const useStyles = makeStyles(theme => ({
const styles = {
  root: {
    background: '#fff',
    padding: '0 100px',
    position: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    margin: 'auto',
    minHeight: '200px',
    flexShrink: 0,

    minWidth: '300px',
    maxWidth: '350px',
  },
  slide: {
    padding: '24px 16px',
    background: '#fff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
    //    minWidth: '250px',
    margin: 'auto',
  },
  img: {
    width: 120,
    height: 120,
    display: 'block',
    marginBottom: 16,
  },
};
// ));

const albums = [
  {
    name: 'Abbey Road',
    src: '/static/album-art-1.jpg',
  },
  {
    name: 'Bat Out of Hell',
    src: '/static/album-art-2.jpg',
  },
  {
    name: 'Homogenic',
    src: '/static/album-art-3.jpg',
  },
  {
    name: 'Number of the Beast',
    src: '/static/album-art-4.jpg',
  },
  {
    name: "It's Blitz",
    src: '/static/album-art-5.jpg',
  },
  {
    name: 'The Man-Machine',
    src: '/static/album-art-6.jpg',
  },
  {
    name: 'The Score',
    src: '/static/album-art-7.jpg',
  },
  {
    name: 'Lost Horizons',
    src: '/static/album-art-8.jpg',
  },
];

class DemoCoverflow extends React.Component {
  // classes = useStyles();
  // test

  state = {
    index: 0,
    position: new Animated.Value(0),
  };

  handleChangeIndex = index => {
    this.setState({ index });
  };

  handleSwitch = (index, type) => {
    if (type === 'end') {
      Animated.spring(this.state.position, { toValue: index }).start();
      return;
    }
    this.state.position.setValue(index);
  };

  render() {
    const { index, position } = this.state;

    return (
      <SwipeableViews
        index={index}
        style={styles.root}
        onChangeIndex={this.handleChangeIndex}
        onSwitching={this.handleSwitch}
        enableMouseEvents
      >
        {albums.map((album, currentIndex) => {
          const inputRange = albums.map((_, i) => i);
          const scale = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => {
              return currentIndex === i ? 1 : 0.7;
            }),
          });
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => {
              return currentIndex === i ? 1 : 0.3;
            }),
          });
          const translateX = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => {
              return (100 / 2) * (i - currentIndex);
            }),
          });

          return (
            <Animated.div
              key={String(currentIndex)}
              style={{
                opacity,
                transform: [{ scale }, { translateX }],
                ...styles.slide,
              }}
            >
              <img style={styles.img} src={album.src} alt="cover" />
              {album.name}
            </Animated.div>
          );
        })}
      </SwipeableViews>
    );
  }
}

export default DemoCoverflow;
