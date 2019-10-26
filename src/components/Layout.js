import React, { Fragment } from 'react'

import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'

const heightFn = theme => (accum, key) => {
  const height = theme.mixins.toolbar[key]

  return {
    ...accum,
    [key]: {
      height: `calc(100% - ${height})`,
    }
  }
}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: `calc(100% - ${theme.mixins.toolbar.minHeight}px)`,
      ...(Object.keys(theme.mixins.toolbar).filter(key => key !== 'minHeight').reduce(heightFn(theme), {}))
    }
  }
})

const Layout = ({children, title}) => {
  const classes = useStyles()

  return (
<Fragment>
  <CssBaseline />
  <Header title={title} />
  <main className={classes.root}>{children}</main>
</Fragment>
  )
}

export default Layout
