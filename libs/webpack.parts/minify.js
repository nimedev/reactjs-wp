/**
 * @module minify
 * @member webpack.parts
 */

// npm modules
const webpack = require('webpack')

/**
 * Configurations for UglifyJsPlugin
 */
module.exports = () => ({
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})
