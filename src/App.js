import React, { useEffect } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"

import 'typeface-roboto'
import Layout from './components/Layout'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import NoMatch from './pages/NoMatch'

// import logo from './logo.svg'
import './App.css'

import { useMediaQuery } from '@material-ui/core'

import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'

import { useContextState } from './components/State'
import config from './config'

const saveState = (windowDevice, state) => {
  try {
    const persisted = JSON.stringify(state)
    windowDevice.localStorage.setItem(config.storage.name, persisted)
  } catch (e) {
    console.error(`error saving [${config.storage.name}] to window.localStorage: ${JSON.stringify(e)}`)
  }
}

function App() {
  const [state, ] = useContextState()
  const { user } = state;

  useEffect(() => {
    saveState(window, {user})
  }, [user])

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () => {
      const createdTheme = createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      })

      window.theme = createdTheme
      return createdTheme
    },
    [prefersDarkMode],
  );

  return (
<ThemeProvider theme={theme}>
  <Router>
    <Layout title="your app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route component={NoMatch} />
      </Switch>
    </Layout>
  </Router>
</ThemeProvider>
  );
}

export default App
