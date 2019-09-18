// implements Layout header

import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  linkedIn: {
    marginLeft: 'auto',
    marginRight: -12,
  },
}));

const Header = props => {
  const classes = useStyles();
  const { mobileOpen, setMobileOpen } = props;

  //  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          neoteva
        </Typography>
        <div className={classes.linkedIn}>
          <script
            src="https://platform.linkedin.com/in.js"
            type="text/javascript"
          >
            {' '}
            lang: fr_FR
          </script>
          <script
            type="IN/FollowCompany"
            data-id="25757045"
            data-counter="bottom"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  setMobileOpen: PropTypes.func.isRequired,
};

export default Header;
