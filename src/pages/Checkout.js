import React, { useState } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'

import { Link } from 'react-router-dom'

import { useContextState } from '../components/State'
import { selectCartItemsById, selectCart } from '../state/selections'
import { PayAction } from '../state/actions'
import { drillDown } from 'deepdown'

import CartListItem from '../components/CartListItem'
import { makeStyles } from '@material-ui/styles'

import { formatCurrency } from '../lib/currency'
import { payForOrder } from '../services/backend'

const useStyles = makeStyles(theme => ({
  fullHeight: {
    height: '100%',
  },
  page: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 700,
  },
  expand: {
    flex: 1,
  },
  totals: {
    // height: 200,
    textAlign: 'right',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 400,
  }
}))

const subTotal = (items) => {
  const sum = (accum, item) => (accum + item.price)
  return items.reduce(sum, 0)
}

const onPay = (setJustPayed, dispatch, talley, discounts, taxRate, total) => e => {
  e.preventDefault()

  payForOrder({talley, discounts, taxRate, total}).then(response => {
    setJustPayed(true)
    dispatch( PayAction({talley, discounts, taxRate, total}) )
  })
}

const ThankYou = () => {
  const classes = useStyles()
  return (
<Grid container direction="column" wrap="nowrap" justify="space-around" alignItems="center" className={classes.fullHeight}>
  <Typography variant="h2" color="secondary">THANK YOU!</Typography>
  <Button variant="contained" color="primary" component={Link} to={'/'}>CONTINUE</Button>
</Grid>
  )
}

const Checkout = () => {
  const classes = useStyles()
  const [justPayed, setJustPayed] = useState(false)
  const [state, dispatch] = useContextState()
  const cartItemsById = drillDown(state, selectCartItemsById) || {}
  const cartItems = drillDown(state, [...selectCart, 'items']) || []
  const talley = subTotal(cartItems)
  const discounts = []
  const taxRate = 0.1
  const tax = taxRate * talley
  const total = talley + tax

  if (justPayed) {
    return <ThankYou />
  }

return (
<Grid wrap="nowrap" container direction="column" alignItems="center" justify="flex-start" className={classes.page}>
  <Grid item container direction="column" wrap="nowrap" className={classes.expand}>
    {Object.keys(cartItemsById).map(pId => (
        <CartListItem key={`/products/${pId}`} product={cartItemsById[pId][0]} quantity={cartItemsById[pId].length} />
    ))}
  </Grid>

  <Grid item container direction="column" wrap="nowrap" className={classes.totals}>
    <Grid container direction="row" wrap="nowrap" justify="space-between">
      <Typography variant="h5">{`Subtotal (${cartItems.length} items):`}</Typography>
      <Typography variant="h5" color="primary">{`$${formatCurrency(talley)}`}</Typography>
    </Grid>
    <Grid container direction="row" wrap="nowrap" justify="space-between">
      <Typography variant="h5">Discounts:</Typography>
      <Typography variant="h5" color="primary">{`${discounts.length > 0 ? discounts.map(d => d.name).join(', ') : 'None'}`}</Typography>
    </Grid>
    <Grid container direction="row" wrap="nowrap" justify="space-between">
      <Typography variant="h5">Tax:</Typography>
      <Typography variant="h5" color="primary">{`$${formatCurrency(tax)}`}</Typography>
    </Grid>
  </Grid>

  <Button variant="contained" color="secondary" onClick={onPay(setJustPayed, dispatch, talley, discounts, taxRate, total)}>{`Pay $${formatCurrency(total)}`}</Button>
</Grid>
  )
}

export default Checkout
