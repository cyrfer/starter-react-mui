import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => {
  return {
    root: {
      height: '100%',
    }
  }
})

const SignUpSplash = () => {
  const classes = useStyles()

  return (
<Grid container className={classes.root} direction="column" justify="center" alignItems="center">
  <Grid item> <Typography variant="h1" align="center">YOUR APP</Typography> </Grid>
  <Grid item> <Typography variant="body1" align="center">You've come to the right place.</Typography> </Grid>
  <Grid item> <Button component={Link} to={'/signup'} variant="contained">SIGN UP NOW</Button> </Grid>
  <Button variant="text" component={Link} to={'/signin'}>Already signed up? Sign in over here</Button>
</Grid>
  )
}

export default SignUpSplash
