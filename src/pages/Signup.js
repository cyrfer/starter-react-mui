import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Signup as SignupAction } from '../state/actions'
import { useContextState } from '../components/State'
import Form from '../components/SimpleForm'
import { signup } from '../services/backend'

import { useHistory, Link } from 'react-router-dom'
import config from '../config'

const useStyles = makeStyles(theme => {
  return {
    root: {
      flexWrap: 'nowrap',
      height: '100%',
      padding: `0 ${theme.spacing(2)}px`,
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

  signup(userAttributes).then(signupResponse => {
    history.push(newRoute)
    dispatch( SignupAction(userAttributes) )
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
  <Typography variant="h2" align="center">SIGN UP</Typography>
  <Typography variant="body1">To get the benefits</Typography>
  <Form 
    attributes={config.user.signUpAttributes}
    onChange={handleChange}
    onSubmit={onSubmit(dispatch, history, '/')} />
  <Button variant="text" component={Link} to={'/signin'}>Already signed up? Sign in over here</Button>
</Grid>
  )
}

export default SignupPage
