import React from 'react'

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

import 'typeface-roboto'
import Layout from './components/Layout'
import Home from './pages/Home'

// import logo from './logo.svg'
import './App.css'

import { useMediaQuery } from '@material-ui/core'

import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'


function App() {
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
    <Layout title="my app">
      <Route exact path="/" component={Home} />
    </Layout>
  </Router>
</ThemeProvider>
  );
}

export default App
