import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => {
  return {
    root: {
      height: '100%',
    }
  }
})

const Home = () => {
  const classes = useStyles()

  return (
<Grid container className={classes.root} direction="column" justify="center" alignItems="center">
  <Grid item > <Typography variant="h1">Home</Typography> </Grid>
</Grid>
  )
}

export default Home
