import React from 'react'
import { Link, } from "react-router-dom"

import MenuIcon from '@material-ui/icons/Menu'

import { Avatar, } from '@material-ui/core'
import { makeStyles, } from '@material-ui/core/styles'

import {
  AppBar,
  Button,
  IconButton,
  SwipeableDrawer,
  Toolbar,
} from '@material-ui/core'

import SideMenu from './SideMenu'
import Brand from './Brand'

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
      <Brand />
      <div className={classes.rightMenuIcons}>
        {user ? (user.attributes && user.attributes.username ? <ProfileIcon /> : <Login />) : null}
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
