/**
 * @module set-free-variable
 * @memberOf webpack.parts
 */

// npm modules
const webpack = require('webpack')

/**
 * Configurations for DefinePlugin
 * @param {string} key - name of the environment variable to set.
 * @param {string} value - value of the environment variable.
 */
module.exports = (key, value) => {
  const env = {}
  env[key] = JSON.stringify(value)
  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  }
}