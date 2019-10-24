import React, { Fragment } from 'react'

import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'

const useStyles = makeStyles((/*theme*/) => {
  const headerHeight = 64 // theme.mixins.toolbar[mediaQuery]
  // [theme.breakpoints.up('sm')]: {

  return {
    root: {
      height: `calc(100% - ${headerHeight}px)`
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
