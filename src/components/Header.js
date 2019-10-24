import React from 'react'

import { Link } from "react-router-dom"

import { SwipeableDrawer, } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'

import SideMenu from './SideMenu'

import {
  makeStyles,
} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  rightMenuIcons: {
    
  },
  title: {
    flex: 1,
    marginLeft: theme.spacing(1),
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  }
}))

const Header = ({title}) => {
  const classes = useStyles()

  const [state, setState] = React.useState({
    drawer: false,
  });

  const toggleDrawer = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, drawer: open });
  };

  return (
    <div>
<AppBar position="static">
    <Toolbar className={classes.toolbar}>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={toggleDrawer(true)}>
          <MenuIcon />
      </IconButton>
      <Typography className={classes.title} variant="h6" noWrap component={Link} to={'/'} >{title}</Typography>
      <div className={classes.rightMenuIcons}>
      <IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
          <AccountCircle />
      </IconButton>
      </div>
    </Toolbar>
</AppBar>
<SwipeableDrawer open={state.drawer} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)} anchor="left">
  <SideMenu toggleDrawer={toggleDrawer} />
</SwipeableDrawer>
    </div>
  )
}

export default Header
