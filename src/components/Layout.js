import React, { Fragment } from 'react'

import { CssBaseline } from '@material-ui/core'
import Header from './Header'

const Layout = ({children, title}) => {
  return (
<Fragment>
  <CssBaseline />
  <Header title={title} />
  <main>{children}</main>
</Fragment>
  )
}

export default Layout
