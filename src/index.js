/**
 * Main module used to bootstrap de application
 * @module index
 */

// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components'
import './styles'

// Application component
ReactDOM.render(
  <App />,
  document.getElementById('app-root')
)