import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => {
  return {
    root: {
      height: '100%',
    },
    button: {
      margin: theme.spacing(1),
    }
  }
})

const SignInSplash = () => {
  const classes = useStyles()

  return (
<Grid container className={classes.root} direction="column" justify="center" alignItems="center">
  <Grid item> <Typography variant="h1" align="center">YOUR APP</Typography> </Grid>
  <Grid item> <Typography variant="body1" align="center">Welcome back</Typography> </Grid>
  <Grid item> <Button className={classes.button} color="secondary" component={Link} to={'/signin'} variant="contained">SIGN IN</Button> </Grid>
  <Button variant="text" component={Link} to={'/signup'} className={classes.button}>Sign up as a different user</Button>
</Grid>
  )
}

export default SignInSplash
