import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, withStyles } from '@material-ui/core';
import { myMaterialTheme as theme } from './Theme';

const styles = (theme) =>({
    root: {
      border: 1 ,
      borderStyle: 'solid',
      borderColor: theme.palette.primary.main,
      borderRadius: 5,
      //color: theme.palette.primary.main,
      '&:hover': {
          backgroundColor: theme.palette.secondary.main,
          color: '#ffffff',
      },
    },
});
  
 export default withStyles(styles)(Button);

