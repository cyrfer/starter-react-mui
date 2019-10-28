import React from 'react'
import { useContextState } from './State'
import { Logout as LogoutAction } from '../state/actions'
import { Link, useLocation } from 'react-router-dom'
import { selectUser, selectUserNameFromUser, selectCart, } from '../state/selections'
import { drillDown } from 'deepdown'

import {
  // Button,
  // Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import {
  AccountCircleOutlined,
  ExitToApp,
  HomeOutlined,
  LockOpenOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons'

import { makeStyles, } from '@material-ui/core/styles'

const useStylesMenu = makeStyles({
  list: {
    width: 250,
  },
})

const onLogout = dispatch => (/*e*/) => {
  dispatch(LogoutAction())
}

const Logout = () => {
  const [/*state*/, dispatch] = useContextState()

  return (
    <ListItem button onClick={onLogout(dispatch)}>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  )
}

const NavItem = ({ text, route, icon }) => {
  return (
    <ListItem component={Link} to={route} >
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

const SideMenu = ({ toggleDrawer }) => {
  const classes = useStylesMenu()
  const location = useLocation()
  const [state, /*dispatch*/] = useContextState()
  const user = drillDown(state, selectUser)
  const nameAttr = drillDown(user, selectUserNameFromUser)
  const cartItems = drillDown(state, [...selectCart, 'items']) || []

  return (
  <div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} >
    <List>
      {user ? (nameAttr ? <Logout /> : <NavItem text={'Sign in'} route={'/signin'} icon={<AccountCircleOutlined />} />) : <NavItem text={'Sign up'} route={'/signup'} icon={<LockOpenOutlined />} />}
      {nameAttr && location.pathname !== '/' ? <NavItem text={nameAttr ? "Home" : "Home"} route="/" icon={<HomeOutlined /> }/> : null}
      {cartItems && location.pathname !== '/checkout' ? <NavItem text="Checkout" route="/checkout" icon={<ShoppingCartOutlined />} /> : null}
  </List>
</div >
  )
}

export default SideMenu
