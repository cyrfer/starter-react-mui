import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useContextState } from '../components/State'
import { selectUser } from '../state/selections'
import { drillDown } from 'deepdown'
import Dashboard from '../components/Dashboard'
import SignInSplash from '../components/SignInSplash'
import SignUpSplash from '../components/SignUpSplash'

const useStyles = makeStyles(theme => {
  return {
    root: {
      height: '100%',
    }
  }
})

const Home = () => {
  const classes = useStyles()
  const [state, /*dispatch*/] = useContextState()
  const user = drillDown(state, selectUser)

return (
<Grid container className={classes.root} direction="column" alignItems="center">
  {user ? (user.attributes && user.attributes.username ? <Dashboard /> : <SignInSplash /> ) : <SignUpSplash /> }
</Grid>
  )
}

export default Home
