import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import { store } from './reducers/index'

const applicationStore = createStore(store);

render (
  <Provider store={applicationStore}>
    <App />
  </Provider>,
  document.querySelector('#root')
)

