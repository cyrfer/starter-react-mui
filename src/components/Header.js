import React from 'react'
import { Link, useLocation, } from "react-router-dom"
import { Menu as MenuIcon } from '@material-ui/icons'
import { makeStyles, } from '@material-ui/core/styles'

import {
  AppBar,
  Avatar,
  Button,
  Grid,
  IconButton,
  SwipeableDrawer,
  Toolbar,
} from '@material-ui/core'

import SideMenu from './SideMenu'
import Brand from './Brand'
import Cart from './Cart'

import { useContextState } from './State'
import { selectUser, selectUserNameFromUser, } from '../state/selections'
import { drillDown } from 'deepdown'

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
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  }
}))

const useStylesProfile = makeStyles(theme => ({
  avatar: {
    textTransform: 'uppercase',
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.dark,
  },
}))

const ProfileIcon = () => {
  const classes = useStylesProfile()
  const [state,] = useContextState()
  const user = drillDown(state, selectUser)
  const nameAttr = drillDown(user, selectUserNameFromUser)

  return (
    <Avatar className={classes.avatar}>{nameAttr ? nameAttr[0] : '?'}</Avatar>
  )
}

const Login = () => {
  return (
<Button component={Link} to={'/signin'} variant="contained" color="secondary">SIGN IN</Button>
  )
}

const Header = () => {
  const classes = useStyles()
  const [contextState, /*dispatch*/] = useContextState()
  const user = drillDown(contextState, selectUser)
  const location = useLocation()

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
      <Grid item className={classes.title}> <Brand /> </Grid>
      <Grid container direction="row" justify="flex-end" className={classes.rightMenuIcons}>
        {location.pathname !== '/checkout' ? <Cart /> : null}
        {user ? (user.attributes && user.attributes.username ? <ProfileIcon /> : <Login />) : null}
      </Grid>
    </Toolbar>
</AppBar>
<SwipeableDrawer open={state.drawer} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)} anchor="left">
  <SideMenu toggleDrawer={toggleDrawer} />
</SwipeableDrawer>
    </div>
  )
}

export default Header
