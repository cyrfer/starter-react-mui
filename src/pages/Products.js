import React, { useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import { Button, CircularProgress, Fab, Grid, Typography } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles'
import { useContextState } from '../components/State'
import { drillDown } from 'deepdown'
import { selectProductBySlug } from '../state/selections'
import { fetchProductBySlug } from '../services/backend'
import { AddToCart, UpdateProducts } from '../state/actions'

const useStyles = makeStyles(theme => {
  return {
    fab: {
      position: 'fixed',
      right: theme.spacing(2),
      bottom: theme.spacing(2),
    },
    margin: {
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(2)
    },
    root: {
      height: '100%',
    },
    progress: {
      margin: theme.spacing(2),
    },
    imageBox: {
      textAlign: 'center',
      height: 250,
      width: '100%',
    }
  }
})

const MissingProduct = () => {
  const classes = useStyles()
  return (
<Grid container direction="column" className={classes.root} justify="center" alignItems="center">
  <Grid item><Typography variant="h1" align="center">EXCUSE US</Typography></Grid>
  <Grid item><Typography variant="body1">We need a minute while we find that...</Typography></Grid>
  <Grid item> <CircularProgress className={classes.progress} color="secondary" /> </Grid>
  <Button className={classes.button} variant="contained" component={Link} to="/">I THINK SOMETHING IS WRONG</Button>
</Grid>
  )
}

const onAddCartItem = (dispatch, p) => (/*e*/) => {
  // console.log('adding item to cart', p)
  dispatch( AddToCart(p) )
}

const ProductPage = () => {
  const classes = useStyles()
  const match = useRouteMatch()
  const slug = match.params.slug;
  const [state, dispatch] = useContextState()
  const product = drillDown(state, [...selectProductBySlug, slug, 0])

  useEffect(() => {
    console.log(`about to fetch products [${slug}]`)
    fetchProductBySlug(slug).then(productResponse => {
      dispatch( UpdateProducts([productResponse.data]))
    })
  }, [slug, dispatch])

  if (!product) {
    return <MissingProduct />
  }

  return (
<Grid container direction="column" wrap="nowrap" className={classes.root} justify="flex-start" alignItems="center">
  <Grid item className={classes.imageBox}>
    <img height="250" src={product.icon} alt={product.name} />
  </Grid>
  <Grid item><Typography variant="h1">{product.name}</Typography></Grid>
  <Grid item><Typography variant="body1">{product.tagLine}</Typography></Grid>
  <Grid item><Typography variant="body2">{product.description}</Typography></Grid>
  <Grid item className={classes.fab}>
    <Grid container direction="row" alignItems="center">
      <Typography className={classes.margin} variant="body2" color="secondary">{`$${product.price}`}</Typography>
      <Fab className={classes.margin} size="small" color="secondary" aria-label="add" onClick={onAddCartItem(dispatch, product)}>
        <AddIcon />
      </Fab>
    </Grid>
  </Grid>
</Grid>
  )
}

export default ProductPage
