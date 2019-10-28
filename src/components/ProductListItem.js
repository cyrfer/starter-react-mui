import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { formatCurrency } from '../lib/currency'

const useStyles = makeStyles(theme => {
  return {
    price: {
      flex: 1,
      margin: theme.spacing(2),
    },

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

const ProductListItem = ({data}) => {
  const classes = useStyles()

  return (
<Grid component={Link} to={`/products/${data.slug}`} item xs={12} sm={6} lg={4} container direction="row" alignItems="center" className={classes.row}>
  <div className={classes.imageBox}>
    <img src={data.icon} alt={data.name} />
  </div>
  <Grid item className={classes.details}>
    <Typography variant="h5" >{data.name}</Typography>
    <Typography variant="body1">{data.tagLine}</Typography>
  </Grid>
  <Typography variant="body2" align="right" className={classes.price}>{`$${formatCurrency(data.price)}`}</Typography>
</Grid>
  )
}

export default ProductListItem
