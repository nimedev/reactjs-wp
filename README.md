# ReactJS Seed

> A starting point for building web applications with ReactJS using ES6, Webpack and PostCSS.


## Prerequisites

- [Node.js](https://nodejs.org/en/download/).
- [npm](https://www.npmjs.com/), installed with Node.js.
- [yarn](https://yarnpkg.com/) a package manager for project dependencies.


## Install dependencies

#### 1) Check `Node.js` version.
```sh
node --version
```
The version should be at or above 6.9.1

If you don't have Node.js installed go to [nodejs](https://nodejs.org/en/download/) and install the appropiate version or use [nvm](http://www.sergiolepore.net/2014/06/30/nvm-instalando-y-usando-node-version-manager/) (Recommended).

#### 2) Check `yarn` version.
```sh
yarn --version
```
The version should be at or above 0.15.1

If you don't have yarn installed go to [yarn](https://yarnpkg.com/en/docs/install) and install the appropiate version.

#### 3) Install the workspace dependencies.
```sh
# cd to your project folder
yarn
```

#### 4) (Optional) Install a manager for TypeScript definitions `typings`.

You can use `typings` for intellisense (I use this in VScode).

```sh
yarn global add typings
# cd to your project folder
yarn run typings
```

This create a `src/typings` folder which you can reference in your JavaScript files to get intellisense.


## Workflow

### Environment variables

#### Host configuration
- `NODE_ENV="development"`. Environment for server.
- `REACTJS_HOST=localIP`. Host of webapplication.
- `REACTJS_PORT=3000`. Port of webapplication (Use in development).

#### Access URLs
- `REACTJS_API_URL="http://${ip.address()}:${8080}/api"`. Url of API.

To change any of this variables:

```sh
export REACTJS_PORT=8000
```

### Development workflow

#### Static server with live reload
```sh
# cd to your project folder
yarn start
# After this, a message indicate the url to run the application
```
This create a server using `webpack-dev-server` to serve the application in development environment.  
The browser reloads the app when any file change.

### Production workflow
```sh
# cd to your project folder
# Set environment variable for production
export NODE_ENV='production'

# Build
yarn run build
```
Put all in `dist` folder ready for production.

### Install/Uninstall/Update dependencies
Follow this rules to update dependencies:

- Install dependencies

```sh
# To install production dependencies
# cd to your project folder
yarn add react-router --exact
```
```sh
# To install development dependencies
# cd to your project folder
yarn add eslint --exact --dev
```

- Uninstall dependencies

```sh
# cd to your project folder
yarn remove react-router
```

- **To Upgrade any dependencies follow `Uninstall dependencies` step and install again like `Install dependencies`.**

### Others scripts

To run eslint in console type:

```sh
# cd to your project folder
yarn run lint
```


## Styling

#### CSS Framework **[niduscss-framework](https://github.com/nimedev/niduscss-framework)**.

#### Naming conventions **[SuitCSS naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)**.


## Editors
This project is configured to use with `VScode`. Also contain pre-configured task for development. See `.vscode` folder to explore the options.


## [Contributing](CONTRIBUTING.md)


## [Changelog](CHANGELOG.md)


## [License](LICENSE.md)