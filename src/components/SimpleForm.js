import React, { useState } from 'react'
import { Button, Grid, TextField, makeStyles, } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
  }
}))

const Form = ({attributes, onChange, onSubmit}) => {
  const classes = useStyles()
  const [userAttributes, setUserAttributes] = useState({})
  // const [formValidated, setFormValidated] = useState(false)

  return (
<form className={classes.form} onSubmit={onSubmit}>
  <Grid container direction="column">
    {attributes.map(attr => {
      return (
    <TextField
      key={`signup/form/${attr.name}`}
      // id="outlined-name"
      type={attr.type}
      label={attr.name}
      name={attr.name}
      // className={classes.textField}
      value={userAttributes[attr.value]}
      onChange={onChange(attr.name, userAttributes, setUserAttributes)}
      margin="normal"
      variant="outlined"
    />
      )
    })}
    <Button type="submit" variant="contained">Submit</Button>
  </Grid>
</form>
  )
}

export default Form
