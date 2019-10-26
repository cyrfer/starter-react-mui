import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider as StateProvider } from './components/State';

import reducer from './state/reducer'
import config from './config'

let initialState = {}

try {
  const persisted = window.localStorage.getItem(config.storage.name)
  if (persisted) {
    const state = persisted && JSON.parse(persisted)
    initialState = state || {}
  }
} catch (e) {
  console.error(`error accessing [${config.storage.name}] from window.localStorage: ${JSON.stringify(e)}`)
}

ReactDOM.render(
<StateProvider reducer={reducer} initialState={initialState}>
  <App />
</StateProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
