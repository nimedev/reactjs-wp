'use strict'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const opener = require('opener')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackKit = require('webpack-kit-nimedev')
const webpackEnv = require('./config/webpack-environment')

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  images: path.join(__dirname, 'src/assets/images'),
  icons: path.join(__dirname, 'src/assets/icons'),
  fonts: path.join(__dirname, 'src/assets/fonts'),
  styles: path.join(__dirname, 'src')
}

const common = merge([
  // Common settings
  {
    entry: {
      app: PATHS.src,
      polyfills: `${PATHS.src}/polyfills.js`
    },
    output: {
      path: PATHS.dist,
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json', '.css']
    },

    plugins: [
      new webpack.DefinePlugin(Object.assign(
        {},
        webpackEnv.defineEnvironment
      ))
    ]
  },
  webpackKit.loadHtml({ include: PATHS.src }),
  webpackKit.loadImages({
    include: PATHS.images,
    options: {
      name: './assets/images/[name].[hash].[ext]',
      limit: 25000
    }
  }),
  webpackKit.loadSvgSprite({
    include: PATHS.icons,
    options: {
      name: './assets/icons/[name].[hash].[ext]'
    }
  }),
  webpackKit.loadFonts({ include: PATHS.fonts }),
  webpackKit.loadAssets({ include: PATHS.src }),

  // CSS
  webpackKit.lintCSS({ files: 'src/**/*.css' }),

  // JS
  webpackKit.loadJS({
    test: /\.jsx?$/,
    include: PATHS.src,
    eslintOptions: {
      // Emit warnings over errors to avoid crashing
      // HMR on error.
      emitWarning: process.env.NODE_ENV === 'development'
    }
  }),

  // Plugins
  webpackKit.htmlPlugin({ template: './src/index.html' }, ['polyfills', 'vendor', 'app'])
])

module.exports = ({ target }) => {
  // Return production configuration
  if (target === 'production') {
    return merge([
      common,
      {
        output: {
          filename: '[name].[chunkhash].js'
        },
        plugins: [
          new webpack.HashedModuleIdsPlugin(),
          new CleanWebpackPlugin([PATHS.dist], {
            // Without `root` CleanWebpackPlugin won't point to our
            // project and will fail to work.
            root: process.cwd()
          }),
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
          })
        ]
      },
      webpackKit.extractVendor(webpack, { chunks: ['app'] }),

      // Load global styles
      webpackKit.extractCSS({ include: PATHS.styles })
    ])
  }

  // Run opener
  opener(`http://${webpackEnv.host}:${webpackEnv.port}`)

  // Return development configurations
  return merge([
    common,
    {
      devtool: '#inline-source-map',
      plugins: [
        new webpack.NamedModulesPlugin()
      ]
    },
    webpackKit.devServer(webpack, {
      host: webpackEnv.host,
      port: webpackEnv.port
    }),

    // Load global styles
    webpackKit.loadCSS({ include: PATHS.styles })
  ])
}
