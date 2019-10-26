import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => {
  return {
    root: {
      height: '100%',
    }
  }
})

const NoMatch = ({ location }) => {
  const classes = useStyles()

  return (
<Grid container direction="column" className={classes.root} justify="center" alignItems="center">
  <Grid item><Typography variant="h1">404</Typography></Grid>
  <Button variant="contained" component={Link} to="/">GO HOME</Button>
</Grid>
  )
}

export default NoMatch
