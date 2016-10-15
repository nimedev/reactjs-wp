/**
 * Open the default browser of system with the url of the application for
 * development.
 * @module opener
 */
'use strict'

// npm modules
const ip = require('ip')
const opener = require('opener')

// Constants & Variables
const host = process.env.ANGULARJS_ES6_HOST || ip.address()
const port = process.env.ANGULARJS_ES6_PORT || 3000

// Run opener
opener(`http://${host}:${port}`)