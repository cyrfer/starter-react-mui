import React from 'react'

import { Link, } from "react-router-dom"
import { ShoppingCart } from '@material-ui/icons'
import { Badge, IconButton, } from '@material-ui/core'
import { makeStyles, } from '@material-ui/core/styles'
import { useContextState } from './State'
import { drillDown } from 'deepdown'
import { selectCart } from '../state/selections'

const useStyles = makeStyles(theme => ({
  badge: {
    right: -3,
    // border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

const Cart = () => {
  const classes = useStyles()
  const [state, /*dispatch*/] = useContextState()
  const cart = drillDown(state, selectCart)

  if (!cart || !cart.items) {
    console.log('cart did not find items', cart)
    return null
  }

  return (
<IconButton edge="start" color="inherit" aria-label="checkout" component={Link} to={'/checkout'}>
  <Badge className={classes.badge} badgeContent={cart.items.length} color="secondary" anchorOrigin={{horizontal: "left", vertical: "bottom"}}>
    <ShoppingCart />
  </Badge>
</IconButton>
  )
}

export default Cart
