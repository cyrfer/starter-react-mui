import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AddCircle, RemoveCircle } from '@material-ui/icons'
import { AddToCart, RemoveFromCart } from '../state/actions'
import { useContextState } from './State'
import { formatCurrency } from '../lib/currency'

const useStyles = makeStyles(theme => {
  return {
    quantityValue: {
      margin: `0 ${theme.spacing(1)}px`
    },

    price: {
      // flex: 1,
      margin: theme.spacing(2),
    },

    root: {
      height: '100%',
      padding: `0 ${theme.spacing(2)}px`,
    },

    details: {
      padding: `0 ${theme.spacing(1)}px`,
      // flex: 1,
    },

    row: {
      height: 100,
      backgroundColor: theme.palette.primary.light,
      marginTop: theme.spacing(1),
    },

    imageBox: {
      // width: 100,
      flexBasis: 100,
      height: '100%',
      backgroundColor: theme.palette.primary.dark,
    }
  }
})

const Quantity = ({value, onRemoveItem, onAddItem}) => {
  const classes = useStyles()

return (
<Grid container direction="row" wrap="nowrap" alignItems="center" justify="center">
  <IconButton onClick={onRemoveItem}><RemoveCircle /></IconButton>
  <Typography className={classes.quantityValue} variant="body1">{value}</Typography>
  <IconButton onClick={onAddItem}><AddCircle /></IconButton>
</Grid>
  )
}

const onRemoveQuantity = (product, dispatch) => (e) => {
  e.preventDefault()
  dispatch( RemoveFromCart(product) )
}

const onAddQuantity = (product, dispatch) => (e) => {
  e.preventDefault()
  dispatch( AddToCart(product) )
}

const CartListItem = ({product, quantity}) => {
  const classes = useStyles()
  const [/*state*/, dispatch] = useContextState()

  return (
<Grid container direction="row" wrap="nowrap" alignItems="center" justify="flex-start" className={classes.row}>
  <Grid item className={classes.imageBox} component={Link} to={`/products/${product.slug}`}>
    <img src={product.icon} alt={product.name} />
  </Grid>
  <Grid item container direction="column" wrap="nowrap" className={classes.details}>
    <Typography variant="h5" >{product.name}</Typography>
    <Typography variant="body1">{product.tagLine}</Typography>
  </Grid>
  <Grid item container direction="column" wrap="nowrap" alignItems="center" justify="space-around">
    <Typography variant="body2" align="right" className={classes.price}>{`Item price: $${formatCurrency(product.price)}`}</Typography>
    <Quantity value={quantity} onRemoveItem={onRemoveQuantity(product, dispatch)} onAddItem={onAddQuantity(product, dispatch)} />
  </Grid>
</Grid>
  )
}

export default CartListItem
