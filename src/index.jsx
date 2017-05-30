/**
 * Main module used to bootstrap de application
 * @module index
 */

import React from 'react'
import ReactDOM from 'react-dom'

// Global styles
import './styles/index.css'

// Import base styles before all components
import App from './App/App'

// Application component
ReactDOM.render(
  <App />,
  document.getElementById('app-root')
)
