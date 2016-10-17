/**
 * Main module used to bootstrap de application
 * @module index
 */

// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'

// Import base styles before all components
import './styles'
import { App } from './components'

// Application component
ReactDOM.render(
  <App />,
  document.getElementById('app-root')
)