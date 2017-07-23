'use strict'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const opener = require('opener')
const { DefinePlugin, HashedModuleIdsPlugin, NamedModulesPlugin } = require('webpack')
const { ModuleConcatenationPlugin, UglifyJsPlugin } = require('webpack').optimize
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const merge = require('webpack-merge')
const webpackKit = require('webpack-kit-nimedev')
const webpackEnv = require('./config/webpack-environment')

const entryPoints = ['vendor', 'app']

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  images: path.join(__dirname, 'src/assets/images'),
  icons: path.join(__dirname, 'src/assets/icons'),
  fonts: path.join(__dirname, 'src/assets/fonts'),
  styles: path.join(__dirname, 'src'),
  assets: [
    {
      from: path.join(__dirname, 'src/favicon.ico'),
    }, {
      from: path.join(__dirname, 'src/robots.txt'),
    },
  ],
}

const common = merge([
  // Common settings
  {
    entry: {
      app: PATHS.src,
    },
    output: {
      path: PATHS.dist,
      filename: '[name].js',
      chunkFilename: '[id].chunk.js',
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json', '.css'],
    },

    // JS loaders
    module: {
      rules: [{
        test: /\.jsx?$/,
        include: PATHS.src,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          // Emit warnings over errors to avoid crashing
          // HMR on error.
          emitWarning: process.env.NODE_ENV === 'development',
        },
      }, {
        test: /\.jsx?$/,
        include: PATHS.src,
        loader: 'babel-loader',
        options: {
          // Enable caching for improved performance during
          // development.
          // It uses default OS directory by default. If you need
          // something more custom, pass a path to it.
          // I.e., { cacheDirectory: '<path>' }
          cacheDirectory: true,
        },
      }],
    },

    plugins: [
      new ProgressPlugin(),
      new DefinePlugin(Object.assign(
        {},
        webpackEnv.defineEnvironment
      )),
    ],
  },
  webpackKit.loadHtml({ include: PATHS.src }),
  webpackKit.loadImages({ include: PATHS.images }),
  webpackKit.loadSvgSprite({ include: PATHS.icons }),
  webpackKit.loadFonts({ include: PATHS.fonts }),

  // CSS
  webpackKit.lintCSS({ files: 'src/**/*.css' }),

  // Plugins
  webpackKit.htmlPlugin({ template: './src/index.html' }, entryPoints),
])

module.exports = ({ target }) => {
  // Return production configuration
  if (target === 'production') {
    return merge([
      common,
      {
        output: {
          filename: '[name].[chunkhash].js',
          chunkFilename: '[id].[chunkhash].js',
        },
        plugins: [
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
          }),
          new ModuleConcatenationPlugin(),
          new HashedModuleIdsPlugin(),
          new CleanWebpackPlugin([PATHS.dist], {
            // Without `root` CleanWebpackPlugin won't point to our
            // project and will fail to work.
            root: process.cwd(),
          }),
          new UglifyJsPlugin({
            compress: {
              warnings: false,
            },
          }),
        ],
      },
      webpackKit.copyPlugin(PATHS.assets),
      webpackKit.extractVendor({ chunks: ['app'] }),

      // Load global styles
      webpackKit.extractCSS({ include: PATHS.styles }),
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
        new NamedModulesPlugin(),
      ],
    },
    webpackKit.devServer({
      host: webpackEnv.host,
      port: webpackEnv.port,
    }),

    // Load global styles
    webpackKit.loadCSS({ include: PATHS.styles }),
  ])
}