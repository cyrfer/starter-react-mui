import React, { useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { fetchProducts } from '../services/backend'
import { useContextState } from '../components/State'
import { UpdateProducts } from '../state/actions'
import { selectProducts} from '../state/selections'
import { drillDown } from 'deepdown'
import ProductListItem from '../components/ProductListItem'

const ProductList = ({products}) => {
  return (
<Grid container direction="row">
  {products.map(p => (
      <ProductListItem key={`/products/${p.id}`} data={p} />
  ))}
</Grid>
  )
}

const Dashboard = () => {
  const [state, dispatch] = useContextState()
  const products = drillDown(state, selectProducts) || []

  useEffect(() => {
    console.log('about to fetch all products')
    fetchProducts().then(updatedProducts => {
      dispatch( UpdateProducts(updatedProducts.data) )
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
