import React from 'react'
import { useContextState } from './State'
import { Logout as LogoutAction } from '../state/actions'
import { Link } from 'react-router-dom'
import { selectUser, selectUserNameFromUser, } from '../state/selections'
import { drillDown } from 'deepdown'

import {
  // Button,
  // Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { makeStyles, } from '@material-ui/core/styles'

const useStylesMenu = makeStyles({
  list: {
    width: 250,
  },
})

const onLogout = dispatch => (/*e*/) => {
  dispatch( LogoutAction() )
}

const Logout = () => {
  const [/*state*/, dispatch] = useContextState()

  return (
<ListItem button onClick={onLogout(dispatch)}>
  <ListItemIcon>
    <ExitToAppIcon />
  </ListItemIcon>
  <ListItemText primary="Logout" />
</ListItem>
  )
}

const Signer = ({text, route}) => {
  return (
<ListItem component={Link} to={route} >
  <ListItemIcon>
    <ExitToAppIcon />
  </ListItemIcon>
  <ListItemText primary={text} />
</ListItem>
  )
}

const SideMenu = ({toggleDrawer}) => {
  const classes = useStylesMenu();
  const [state, /*dispatch*/] = useContextState()
  const user = drillDown(state, selectUser)
  const nameAttr = drillDown(user, selectUserNameFromUser)

  return (
<div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} >
  <List>
    {user ? (nameAttr ? <Logout /> : <Signer text={'Sign in'} route={'/signin'} />) : <Signer text={'Sign up'} route={'/signup'} /> }
  </List>
</div>
  )
}

export default SideMenu
