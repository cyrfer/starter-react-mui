import React from 'react'

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

const onLogout = e => {
  console.log('logout')
}

const SideMenu = ({toggleDrawer}) => {
  const classes = useStylesMenu();

  return (
<div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} >
  <List>
    <ListItem button onClick={onLogout}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </List>
</div>
  )
}

export default SideMenu
