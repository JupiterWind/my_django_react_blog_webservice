import { AppBar, Toolbar, IconButton, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import { withStyles } from '@mui/styles';
import { myMaterialTheme as theme } from './Theme';

const styles = {
  root: {
    flexGrow: 1,
  },
  center: {
    flexGrow: 1,
    textAlign: 'center',
  },
};

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
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
