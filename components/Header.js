// implements Layout header

import {
  AppBar,
  CssBaseline,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
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

const Header = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div>
      <CssBaseline />
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
    </div>
  );
};

export default Header;
