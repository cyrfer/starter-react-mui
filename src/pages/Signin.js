import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Login as SigninAction } from '../state/actions'
import { useContextState } from '../components/State'
import Form from '../components/SimpleForm'
import { signin } from '../services/backend'

import { useHistory, Link } from 'react-router-dom'
import config from '../config'

const useStyles = makeStyles(theme => {
  return {
    root: {
      flexWrap: 'nowrap',
      height: '100%',
      padding: `0 ${theme.spacing(2)}px`,
    },
    classes: {
      button: {
        margin: theme.spacing(2),
      },
    },
    // resorting to css breakpoints because this was not working:
    // <Grid xs={12} sm={6} md={4} lg={3}>....</Grid>
    form: {
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: `${100*6/12}%`,
      },
      [theme.breakpoints.up('md')]: {
        width: `${100*4/12}%`,
      },
      [theme.breakpoints.up('lg')]: {
        width: `${100*3/12}%`,
      },
    }
  }
})

const onSubmit = (dispatch, history, newRoute) => (e) => {
  e.preventDefault() // prevent form from doing its POST

  const userAttributes = Array.prototype.slice.call(e.target.elements, 0, -1)
    // avoid the submit button, and get input elements
    .filter(elem => elem.tagName === 'INPUT')
    // convert form data into JSON
    .reduce((accum, elem) => {
      return {
        ...accum,
        [elem.name]: elem.value
      }
    }, {})

  signin(userAttributes).then(signupResponse => {
    history.push(newRoute)
    dispatch( SigninAction(userAttributes) )
  })
}

const handleChange = (field, state, setState) => e => {
  setState({
    ...state,
    [field]: e.target.value,
  })
}

const SignupPage = () => {
  const classes = useStyles()
  const [/*state*/, dispatch] = useContextState()
  const history = useHistory()

  return (
<Grid container className={classes.root} direction="column" justify="center" alignItems="center">
  <Typography variant="h2" align="center">WELCOME BACK</Typography>
  <Typography variant="body1">We've been expecting you</Typography>
  <Grid item className={classes.form}>
    <Form 
      attributes={config.user.signInAttributes}
      onChange={handleChange}
      onSubmit={onSubmit(dispatch, history, '/')} />
  </Grid>
  <Button variant="text" component={Link} to={'/signup'} className={classes.button}>Sign up as a different user</Button>
</Grid>
  )
}

export default SignupPage
