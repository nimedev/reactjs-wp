/**
 * Select app constants according to environment.
 * Create a constants file used by application.
 * @module constants
 */
'use strict'

// core modules
const fs = require('fs')
const path = require('path')

// App Modules
const constants = require('./constants')

// Constants & Variables
const fileName = 'app.constants.js'
const destPath = path.resolve(`${__dirname}/../shared/${fileName}`)
// eslint-disable-next-line no-console
console.log(destPath)

// Convert object to string and add export function for the file to create
const objectString = JSON.stringify(constants)
const codeString = `export default ${objectString}`

// Save the new file
fs.writeFile(destPath, codeString, err => {
  if (err) {
    // eslint-disable-next-line no-console
    return console.error(err)
  }

  // eslint-disable-next-line no-console
  console.log('App constants: ', constants)
})