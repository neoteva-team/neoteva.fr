// implements Layout sidebar
import { Divider, makeStyles, useTheme } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import NextLink from 'next/link';
import { PropTypes } from 'prop-types';
import React from 'react';
import imgNeoteva from './neoteva1800px.png';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  imgToolbar: {
    maxHeight: '100%',
    maxWidth: '100%',
    width: 'auto',
    height: 'auto',
    //    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
  },
  helper: {
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'middle',
  },
}));

const SideBar = props => {
  const { handleDrawerToggle, mobileOpen } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <span className={classes.helper}>
          <img src={imgNeoteva} className={classes.imgToolbar} alt="neoteva" />
        </span>
      </div>
      <Divider />
      {/*       <List>
        {['Notre offre', 'Qui sommes nous ?', 'Contact', 'Draft'].map(
          (text, index) => (
            <NextLink href="about" key={text}>
              <ListItem
                button
                key={text}
                onClick={mobileOpen ? handleDrawerToggle : undefined}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </NextLink>
          ),
        )}
      </List>
      <Divider />
      <List>
        {['LinkedIn', 'Facebook', 'Instagram'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
 */}{' '}
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication 
      of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

SideBar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
};

export default SideBar;
