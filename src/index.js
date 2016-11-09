/**
 * Main module used to bootstrap de application
 * @module index
 */

// Import base styles before all components
import './styles'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// Application component
ReactDOM.render(
  <App />,
  document.getElementById('app-root')
)