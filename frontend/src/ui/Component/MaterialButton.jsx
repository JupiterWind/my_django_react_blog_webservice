import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';

const styles = (theme) =>({
    root: {
      border: 1 ,
      borderStyle: 'solid',
      borderColor: '#000000',
      borderRadius: 10,
      //color: theme.palette.primary.main,
      '&:hover': {
          backgroundColor: theme.palette.secondary.main,
          color: '#ffffff',
      },
    },
});

function RoundedButton(props) {
  const { classes } = props;
  return <Button variant="contained" className={classes.root}>custom button</Button>;
}

RoundedButton.propTypes = {
  classes: PropTypes.object.isRequired
};
  
 export default withStyles(styles)(RoundedButton);

