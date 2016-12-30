/**
 * Main module used to bootstrap de application
 * @module index
 */

import React from 'react'
import ReactDOM from 'react-dom'

// Import base styles before all components
import './styles/index.css'
import App from './App'

// Application component
ReactDOM.render(
  <App />,
  document.getElementById('app-root')
)
