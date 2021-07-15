import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
    textAlign:"center",
    fontSize: "32px",
    fontFamily: "sans-serif,Roboto, Helvetica, Arial ",
    fontWeight: "bold",
    lineHeight: "1.6px",
    letterSpacing: "0.0075em",
    
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
            <Typography  variant="h6" className={classes.title}>
            Shopping Store
          </Typography>
            <ShoppingCartTwoToneIcon className={classes.menuButton}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
