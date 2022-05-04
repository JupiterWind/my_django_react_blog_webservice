import { React, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
} from '@mui/material';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import { withStyles } from '@mui/styles';
import Menu from './Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  center: {
    flexGrow: 1,
    textAlign: 'center',
  },
};

const drawerWidth = 440;

function Header(props) {
  const { classes } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          {/* Drawer */}
          <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
            <Menu />
          </Drawer>
          <Box className={classes.center}>
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: 3, pt: 0, pb: 0, fontSize: 14 }}
            >
              Jupiter Wind
            </Button>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CreateIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
