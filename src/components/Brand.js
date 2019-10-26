import React from 'react'
import { Link, useLocation } from "react-router-dom"

import HomeIcon from '@material-ui/icons/Home';

import { makeStyles, } from '@material-ui/core/styles'

import {
  Grid,
  Hidden,
  IconButton,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  rightMenuIcons: {
    
  },

  icon: {
    color: theme.palette.primary.contrastText,
  },

  container: {
    flex: 1,
  },

  title: {
    color: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(1),
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  }
}))

const routeBrands = {
  '/': {icon: <HomeIcon />, text: 'Dashboard'},
  '/signin': {icon: <HomeIcon />, text: 'Dashboard'},
  '/signup': {icon: <HomeIcon />, text: 'Dashboard'},
}

const Brand = () => {
  const classes = useStyles()
  const location = useLocation()
  let brand = routeBrands[location.pathname]
  if (!brand) {
    console.error('could not find brand route, ', location.pathname)
    brand = {text: 'Missing'}
  }

  return (
<Grid container direction="row" className={classes.container}>
  {!brand.icon ? null : <Hidden smUp> <IconButton className={classes.icon}> {brand.icon} </IconButton> </Hidden>}
  <Hidden xsDown> <Typography className={classes.title} variant="h6" noWrap component={Link} to={'/'}> {brand.text} </Typography> </Hidden>
</Grid>
  )
}

export default Brand
