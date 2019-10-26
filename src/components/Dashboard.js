import React, { useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { fetchProducts } from '../services/backend'
import { useContextState} from '../components/State'

import { UpdateProducts } from '../state/actions'
import { selectProducts} from '../state/selections'
import { drillDown } from 'deepdown'

const Product = ({data}) => {
  const classes = useStyles()

  return (
<Grid item xs={12} sm={6} lg={4} container direction="row" className={classes.row}>
  <div className={classes.imageBox}>
    <img src={data.image} alt={data.name} />
  </div>
  <div className={classes.details}>
    <Typography variant="h5" >{data.name}</Typography>
    <Typography variant="body1">{data.description}</Typography>
  </div>
</Grid>
  )
}

const ProductList = ({products}) => {
  return (
<Grid container direction="row">
  {products.map(p => <Product key={`/products/${p.id}`} data={p} />)}
</Grid>
  )
}

const useStyles = makeStyles(theme => {
  return {
    root: {
      height: '100%',
      padding: `0 ${theme.spacing(2)}px`,
    },

    details: {
      padding: `0 ${theme.spacing(1)}px`,
    },

    row: {
      height: 100,
      backgroundColor: theme.palette.primary.light,
      marginTop: theme.spacing(1),
    },

    imageBox: {
      width: 100,
      height: '100%',
      backgroundColor: theme.palette.primary.dark,
    }
  }
})

const Dashboard = () => {
  const [state, dispatch] = useContextState()
  const products = drillDown(state, selectProducts) || []

  useEffect(() => {
    fetchProducts().then(updatedProducts => {
      dispatch( UpdateProducts(updatedProducts) )
    })
  }, [dispatch])

  return (
<Grid wrap="nowrap" container direction="column" alignItems="center" justify="flex-start">
  <Grid item xs={12}> <Typography variant="h4" align="center">Products</Typography> </Grid>
  <ProductList products={products} />
</Grid>
  )
}

export default Dashboard
