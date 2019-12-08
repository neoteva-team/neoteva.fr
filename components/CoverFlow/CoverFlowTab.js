import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import imgBouygues from './img/Bouygues_logo.svg';
import imgGroupeEtchart from './img/groupe-etchart-logo-image-noir-600x300.jpg';
import imgSchool from './img/Logo_CentraleSupelec.svg';
import imgVinci from './img/Logo_Vinci.svg';
import imgIdentity from './img/olo-gris.jpg';
import imgSpieBatignolles from './img/Spie_Batignolles_Logo.svg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const imgSource = [
  imgIdentity,
  imgSchool,
  imgBouygues,
  imgVinci,
  imgSpieBatignolles,
  imgGroupeEtchart,
];

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    // width: '100%',
    maxWidth: '960px',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    //    '& .MuiTabs-flexContainer': { justifyContent: 'center' },
  },
  img: {
    maxWidth: '120px',
    maxHeight: '120px',
    width: 'auto',
    height: 'auto',
    //    width: 120,
    //    height: 120,
    display: 'block',
    //    marginBottom: 16,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"

        //        style={{ justifyContent: 'center' }}
      >
        <Tab
          label="Identité"
          {...a11yProps(0)}
          icon={<img src={imgSource[0]} className={classes.img} />}
        />
        <Tab
          label="Formation"
          {...a11yProps(0)}
          icon={<img src={imgSource[1]} className={classes.img} />}
        />
        <Tab
          label="Bouygues"
          {...a11yProps(0)}
          icon={<img src={imgSource[2]} className={classes.img} />}
        />
        <Tab
          label="Vinci"
          {...a11yProps(0)}
          icon={<img src={imgSource[3]} className={classes.img} />}
        />
        <Tab
          label="Spie Batignolles"
          {...a11yProps(0)}
          icon={<img src={imgSource[4]} className={classes.img} />}
        />
        <Tab
          label="Groupe Etchart"
          {...a11yProps(0)}
          icon={<img src={imgSource[5]} className={classes.img} />}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
