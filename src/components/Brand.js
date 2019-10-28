import React from 'react'
import { useLocation } from "react-router-dom"
import { makeStyles, } from '@material-ui/core/styles'
import {
  AccountCircleOutlined,
  Home as HomeIcon,
  LockOpenOutlined,
  ShoppingCart,
  FavoriteBorderOutlined
} from '@material-ui/icons'

import {
  Grid,
  Hidden,
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

const routeBrands = [
  {route: /^\/$/, icon: <HomeIcon />, text: 'Home'},
  {route: /^\/checkout$/, icon: <ShoppingCart />, text: 'Checkout'},
  {route: /^\/signin$/, icon: <AccountCircleOutlined />, text: 'Sign In'},
  {route: /^\/signup$/, icon: <LockOpenOutlined />, text: 'Sign Up'},
  {route: /^\/products\/.*$/, icon: <FavoriteBorderOutlined />, text: 'Products'}
]

const Brand = () => {
  const classes = useStyles()
  const location = useLocation()
  let brand = routeBrands.find(rb => rb.route.test([location.pathname]))
  if (!brand) {
    console.error('could not find brand route, ', location.pathname)
    brand = {text: 'Missing'}
  }

  return (
<Grid container direction="row" wrap="nowrap" alignItems="center" className={classes.container}>
  {!brand.icon ? null : <Hidden smUp> {brand.icon} </Hidden>}
  <Typography className={classes.title} variant="h6" noWrap> {brand.text} </Typography>
</Grid>
  )
}

export default Brand
